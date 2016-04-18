module ApplicationHelper
  def broadcast_message(channel, content)
    message = { channel: channel, data: content, ext: {auth_token: 'secret'}}
    uri = URI.parse(Rails.application.secrets.faye_url)
    http = Net::HTTP.new(uri.host, uri.port)
    request = Net::HTTP::Post.new(uri.request_uri)
    request.set_form_data(message: message.to_json)
    return http.request(request)
  end
end
