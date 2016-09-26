



var _users_userId_locks = {
  "locks": [
    {
      "id": "23934B44-53F1-42FB-A912-7E6BC4BCEB67",
      "name": "Home - Front Door",
      "bolt_state": "locked",
      "online_status": "online"
    },
    {
      "id": "FD0BC2ED-56E3-4683-A4D6-426435DD6036",
      "name": "Home - Garage Door",
      "bolt_state": "unlocked",
      "online_status": "online"
    },
    {
      "id": "46658238-8108-4107-A62B-1FF3FA34072A",
      "name": "Office Door",
      "bolt_state": "locked",
      "online_status": "offline"
    }
  ]
}

$('#_users_userId_locks').html(JSON.stringify(_users_userId_locks, undefined, 4));

function output(target, json) {
    $(target).html(json);
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

var _me = {
    "id": "f726aa74-d1db-4ee9-ac00-3d3e77721512",
    "name": "Phil Dumas"
};

var str = JSON.stringify(_me, undefined, 4);

output('#_me', syntaxHighlight(str));

var _users_userId = {
    "id": "f726aa74-d1db-4ee9-ac00-3d3e77721512",
    "name": "Phil Dumas"
};

var str = JSON.stringify(_users_userId, undefined, 4);

output('#_users_userId', syntaxHighlight(str));

var _users_userId_locks = {
  "locks": [
    {
      "id": "23934B44-53F1-42FB-A912-7E6BC4BCEB67",
      "name": "Home - Front Door",
      "bolt_state": "locked",
      "online_status": "online"
    },
    {
      "id": "FD0BC2ED-56E3-4683-A4D6-426435DD6036",
      "name": "Home - Garage Door",
      "bolt_state": "unlocked",
      "online_status": "online"
    },
    {
      "id": "46658238-8108-4107-A62B-1FF3FA34072A",
      "name": "Office Door",
      "bolt_state": "locked",
      "online_status": "offline"
    }
  ]
}

var str = JSON.stringify(_users_userId_locks, undefined, 4);

output('#_users_userId_locks', syntaxHighlight(str));