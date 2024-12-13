# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/38_-_The_Picnic/Solution/Proof_2



Puzzles and Curious Problems by Henry Ernest Dudeney: $38$
The Picnic
Four married couples had a picnic together, and their refreshments included $32$ bottles of lemonade.
Mary only disposed of one bottle,
Anne had two,
Jane swallowed the contents of three,
and Elizabeth emptied four bottles.
The husbands were more thirsty,
except John MacGregor, who drank the same quantity as his better half.
Lloyd Jones drank twice as much as his wife,
William Smith three times as much as his wife,
and Patrick Dolan four times as much as his wife demanded.
The puzzle is to find the surnames of the ladies.
Which man was married to which woman?


Solution
Mary is the wife of William Smith
Anne is the wife of Patrick Dolan
Jane is the wife of John MacGregor
Elizabeth is the wife of Lloyd Jones.


Proof
From:

$a + 2 b + 3 c + 4 d = 22$
we can infer that:

$a + 3 c = 22 - 2 b - 4 d$
is even.
Hence $a$ and $c$ must be of the same parity.

Suppose both $a$ and $c$ are even.
Then $b$ and $d$ are both odd.
Either $a = 2$ and $c = 4$ or vice versa.
In either case:

$a + 3 c \equiv 2 \pmod 4$
Because $b$ will be odd:

$2 p \equiv 2 \pmod 4$
and so:

$a + 3 c = 22 - 2 b - 4 d \equiv 0 \pmod 4$
Thus we have a contradiction.

So $a$ and $c$ must both be odd and therefore $b$ and $d$ must both be even.

$d$ cannot be $4$ since any assignment of $\set {1, 2, 3}$ to $\tuple {a, b, c}$ yields:

$a + 2 b + 3 c > 22 - \paren {4 \times 4} = 6$
So we must have $d = 2$ and $b = 4$, leading to:

$a + 3 c = 22 - \paren {2 \times 4} - \paren {4 \times 2} = 6$
from which $a = 3$ and $c = 1$ follow immediately.

So:

Jane drank the same quantity as her husband John MacGregor, that is, $3$ bottles
Lloyd Jones drank twice as much as the $4$ bottles drunk by his wife Elizabeth
William Smith drank three times as much as his wife Mary, who drank just $1$ bottle
Patrick Dolan drank four times as much as his wife Anne's $2$ bottles.
$\blacksquare$


Sources
Adam Bailey (https://math.stackexchange.com/users/22062/adam-bailey), Dudeney's "Puzzles and Curious Problems": 38: The Picnic, URL (version: 2021-12-21): https://math.stackexchange.com/q/4339034




