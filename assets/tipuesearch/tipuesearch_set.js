
/*
Tipue Search 6.1
Copyright (c) 2017 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


var tipuesearch_pages = ["https://pages.github.ibm.com/watson-health-playbook/dev/index/", "https://pages.github.ibm.com/watson-health-playbook/dev/planning-and-tracking-work/ongoing-delivery/", "https://pages.github.ibm.com/watson-health-playbook/resources/onboarding/", "https://pages.github.ibm.com/watson-health-playbook/tools/aha", "https://pages.github.ibm.com/watson-health-playbook/tools/index", "https://pages.github.ibm.com/watson-health-playbook/dev/agile/ibm-squad-thinking", "https://pages.github.ibm.com/watson-health-playbook/dev/agile/play-by-play", "https://pages.github.ibm.com/watson-health-playbook/om/om-guild/index/", "https://pages.github.ibm.com/watson-health-playbook/ai-design/learning/introduction/", "https://pages.github.ibm.com/watson-health-playbook/design/design-guild/watson-design-kit/", "https://pages.github.ibm.com/watson-health-playbook/foundation/who/","https://pages.github.ibm.com/watson-health-playbook/foundation/what/", "https://pages.github.ibm.com/watson-health-playbook/foundation/who/", "https://pages.github.ibm.com/watson-health-playbook/foundation/why/", "https://pages.github.ibm.com/watson-health-playbook/design/design-guild/index/", "https://pages.github.ibm.com/watson-health-playbook/dev/developer-guide/index", "https://pages.github.ibm.com/watson-health-playbook/dev/developer-guide/armada-watson/", "https://pages.github.ibm.com/watson-health-playbook/dev/developer-guide/ci-cd/", "https://pages.github.ibm.com/watson-health-playbook/dev/agile/play-by-play/capacity-planning/", "https://pages.github.ibm.com/watson-health-playbook/dev/github/00-getting-started/", "https://pages.github.ibm.com/watson-health-playbook/dev/developer-guide/delivering-code/"];

/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'tip', 'replace_with': 'tipue'},
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
    {'url': '/tools/onboarding', 'score': 200},
    {'url': '/tools/zenhub', 'score': 150},
    {'url': '/dev/planning-and-tracking-work/ongoing-delivery/', 'score': 100},
]};

// Illogical stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Related searches

var tipuesearch_related = {'searches': [
     {'search': 'tipue', 'related': 'Tipue Search'},
     {'search': 'tipue', 'before': 'Tipue Search', 'related': 'Getting Started'},
     {'search': 'tipue', 'before': 'Tipue', 'related': 'jQuery'},
     {'search': 'tipue', 'before': 'Tipue', 'related': 'Blog'}
]};


// Internal strings

var tipuesearch_string_1 = 'No title';
var tipuesearch_string_2 = 'Showing results for';
var tipuesearch_string_3 = 'Search instead for';
var tipuesearch_string_4 = '1 result';
var tipuesearch_string_5 = 'results';
var tipuesearch_string_6 = 'Back';
var tipuesearch_string_7 = 'More';
var tipuesearch_string_8 = 'Nothing found.';
var tipuesearch_string_9 = 'Common words are largely ignored.';
var tipuesearch_string_10 = 'Search too short';
var tipuesearch_string_11 = 'Should be one character or more.';
var tipuesearch_string_12 = 'Should be';
var tipuesearch_string_13 = 'characters or more.';
var tipuesearch_string_14 = 'seconds';
var tipuesearch_string_15 = 'Searches related to';


// Internals


// Timer for showTime

var startTimer = new Date().getTime();
