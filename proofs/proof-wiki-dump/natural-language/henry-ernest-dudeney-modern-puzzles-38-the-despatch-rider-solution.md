# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/38_-_The_Despatch-Rider/Solution



Modern Puzzles by Henry Ernest Dudeney: $38$
The Despatch-Rider
If an army $40$ miles long advances $40$ miles
while a despatch-rider gallops from the rear to the front,
delivers a despatch to the commanding general,
and returns to the rear,
how far has he to travel?


Solution
$40 + \sqrt {2 \times 40^2} \approx 96 \cdotp 568$ miles.


Proof
We have that the length of the army is $40$ miles.
Let $d_1$ miles be the distance travelled by the despatch-rider from the rear to the front.
Let $d_2$ miles be the distance travelled by the despatch-rider returning from the front to the rear.
Let $t_1$ be the time taken to achieve the first leg of the journey.
Let $t_2$ be the time taken to achieve the second leg of the journey.
Let $v_d$ be the speed of the despatch-rider.
Let $v_a$ be the speed of the army.
We have that:

$40 = v_a \paren {t_1 + t_1}$
During the first leg, the speed relative to the army of the despatch-rider is $v_d - v_a$.
During the second leg, the speed relative to the army of the despatch-rider is $v_d + v_a$.

$40 = t_1 \paren {v_d - v_a} = t_2 \paren {v_d + v_a}$
Thus:

$40 = v_a \paren {t_1 + t_1} = v_a \paren {\dfrac {40} {v_d - v_a} + \dfrac {40} {v_d + v_a} }$
Let $r = \dfrac {v_d} {v_a}$.
Hence as $v_d > v_a$ we have that:

$r > 1$
Hence:

$1 = \dfrac 1 {r - 1} + \dfrac 1 {r + 1} = \dfrac {2 r} {r^2 - 1}$
This leads to:

$r^2 - 2 r - 1 = 0$
which, from the Quadratic Formula, gives us:

$r = 1 \pm \sqrt 2$
As $r > 1$:

$r = 1 + \sqrt 2$
which leads to:

$d_1 + d_2 = 40 + 40 \sqrt 2 = 40 + \sqrt {2 \times 40^2}$
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $38$. -- The Despatch-Rider
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $66$. The Dispatch Rider




