"use client";
import { useEffect, useState } from "react";
import { getFirestore, collection, query, where, getDocs, onSnapshot } from "firebase/firestore";

const firestore = getFirestore();

const NotificationBadge = () => {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const q = query(collection(firestore, "messages"), where("readed", "==", false));

    const fetchUnreadMessages = async () => {
      try {
        const querySnapshot = await getDocs(q);
        setUnreadCount(querySnapshot.size);
      } catch (error) {
        console.error("Error fetching unread messages:", error);
      }
    };

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUnreadCount(snapshot.size);
    });

    fetchUnreadMessages();

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {unreadCount > 0 && (
        <div className='flex justify-center items-center absolute -top-2 -end-2 bg-red-500 border-2 border-white w-6 h-6 rounded-full text-white'>
          <span className='notification-badge !text-xs'>{unreadCount}</span>
        </div>
      )}
    </div>
  );
};

export default NotificationBadge;
