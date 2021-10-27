# The JS Treasure Hunt

This repository contains everything from our 'Coding Superpowers' javascript
treasure hunt we did at OneSignal. This treasure hunt was the first thing our
new coders got to really work on on their own so it is set up in a way to start
with a small problem and then use the answer to that as part of solving the
next problem.

The idea for the project started as we were talking about encryption in general
and how we could 'encode' a message so that WE could still decode and read it
but someone else wouldn't be able to without knowing what to do. Together we
decided on how it should work (eg, should we create a map of letters or a list
and then 'rotate' them like how rot13 works) and then wrote the 'encode' version
together before sending everyone off to write the decode version by themselves
(and fix the hidden bug!).

The treasure hunt involves solving a series of steps using the encode and decode
functions written above (and modifying them to accept different encoding offset
than the original hardcoded version). We had some people volunteer to help out
so we made them the clue holders and each step would tell you a new person to
message and sometimes what to say.

## THE TREASURE HUNT

Most of the clue content is configured and generated with the
treasure-hunt-generator.js script. All of these files include the
encoding/decoding logic to make them easier to understand for the new folks (no
need to learn about imports yet) and to show the incremental changes along the
way. The clues are printed below in case you want to get some of the fun without
haing to run the code.


### Step 0:

Everyone needed to write the decodeMessage method (and fix the bug
preventing the simple answer from working correctly). An example of that being
fixed is in answers/step0-answer.js


### Clue 1:

```
Decode the following message with offset 13 for the next step:

9rypBzrmGBmGurmGErnFHErmuHAG)mZrFFntrm{svEFGPyHr5ynpxUnAqyrmBAmFynpxmnAqmnFxmsBEmGurmArKGmpyHr)
```

### Clue 2:

```
For the next step, encode the following message with
any offset between 2 and 100 and send it
to @thirdClueSlackHandle on slack:

Hi! I'm hot on the trail and ready for the next clue!
```

### Clue 3:

For this step the treasure hunter encodes the message in Clue 2 with an offset
of their choosing (between 2 and 100, although it doesn't actually matter since
it loops) and the third clue holder needs to enter the encoded message into
the script to generate the final clue using the same offset.

Example output if the offset was 25:

```
For the last task each line is encoded using a different offset.
The first line will use offset 25 and each line after
that will increase the offset by one.
You'll need to decode each line individually and piece the last message together.


_NTyRGNTKCyEDDK
AMAZINGzFORzMAKING
JUAUIJT
HCTBCPF
XVLQJC1RXUCEUDQG
RI0DGSHMRKDWOMPPW
YTERFPJ
ZKJOU0YFGTJ
YLWL0P0P2L
1I0S0
NJ17IJWMIO3WIRW12NJMq
]ROJ2OM1O3JKX26O1
4ZK4ST3KWT44WP
53QM463QLT6Z5
V5M6URM2U4N5R
683S532,S5SRN21S6WS6N0OYSN7VSN,25ZRNU2N5281R
}T77PVTO8WP8
94PyVY3Q1%38!U7d1QS0_Q3T1UPY3P81QS0P
R4UQ,YV$Q@Z22Q,V22QIV!V8$54VI
.ZS.R%6!R,63@WV
!0XS8@&&4XST6WS!0T!
&8#
V!Z
W&0#,80D
```

### Final Clue

Do the treasure hunt and find out what it says! Or just run
`node answers/example-final-clue-answer.js`...



## Files in this repository

```
├── answers
│   ├── example-final-clue-answer.js -- example final clue decode
│   ├── example-step-3-answer.js -- example producing the answer to step 2
│   └── step0-answer.js -- a working encode and decode with offset 13
├── readme.md
├── step0-encode-and-decode.js -- the first assigment - implement the decode
└── treasure-hunt-generator.js -- generate the clue text
```
