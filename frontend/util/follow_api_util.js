export const createFollow = (follower_id, following_id) => (
  $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { follow: { follower_id, following_id } }
  })
);

export const deleteFollow = follow => (
  $.ajax({
    method: 'DELETE',
    url: `api/follows/${follow}`,
    data: { follow: follow }
  })
);
