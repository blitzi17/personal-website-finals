import { Injectable } from '@nestjs/common'
import { supabase } from '../supabase'

@Injectable()
export class GuestbookService {

  // GET method — fetches all guestbook entries
  async getAllEntries() {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }

  // GET method — filter by category (list/select)
  async getByCategory(category: string) {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }

  // POST method — creates a new guestbook entry
  async createEntry(name: string, message: string, category: string) {
    const { data, error } = await supabase
      .from('guestbook')
      .insert([{ name, message, category }])
      .select()

    if (error) throw error
    return data[0]
  }
}