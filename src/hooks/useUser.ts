import { useEffect, useState } from 'react';
import { supabase, User } from '@/lib/supabase';

export function useUser(userId: string = '00000000-0000-0000-0000-000000000001') {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', userId)
          .single();

        if (error) throw error;
        setUser(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  const updateUser = async (updates: Partial<User>) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', userId)
        .select()
        .single();

      if (error) throw error;
      setUser(data);
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err as Error };
    }
  };

  return { user, loading, error, updateUser };
}
