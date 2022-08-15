namespace :notify_online_event_url do
  desc 'オンラインイベント参加者にイベント当日の会場URLをメールで送信'
  task send_event_url: :environment do
    events = Event.online_today
    events.each do |event|
      users = event.attendees
      EventMailer.with(users: users, event: event, event_url: event.event_url).notify_event_url.deliver_now
    end
  end
end