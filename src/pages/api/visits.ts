import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db(); 
  const counters = db.collection<{_id : string, count : number}>('counters');
  

  let counterDoc = await counters.findOne({ _id: 'visitCount' });

  if(req.query.getOnly == '1'){
    if(!counterDoc){
      counterDoc  = { _id : 'visitCount' , count : 0};
    }
    res.status(200).json({
      totalVisitors : counterDoc.count
    });
    return;
  }

  if (!counterDoc) {
    await counters.insertOne({ _id: 'visitCount', count: 1 });
    counterDoc = { _id: 'visitCount', count: 1 };
  } else {
    await counters.updateOne({ _id: 'visitCount' }, { $inc: { count: 1 } });
    counterDoc.count += 1;
  }

  res.status(200).json({ totalVisitors: counterDoc.count });
}
