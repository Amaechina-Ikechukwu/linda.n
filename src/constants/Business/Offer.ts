export interface OfferData {
  unique_id: string;
  type: string;
  short_code: string;
  title: string;
  description: string;
  terms: string;
  amount: string;
  discount: number;
  discounted_amount: number;
  image_url: string;
  currency: string;
  user_set_delivery: number;
  delivery_duration: string | null;
  delivery_unit: string | null;
  recurring_plan: string | null;
  number_of_subscribers: number;
  business: Record<string, any>; // Define the actual structure of the "business" object
}

export interface Offer {
  success: boolean;
  data: OfferData;
  message: string;
}
