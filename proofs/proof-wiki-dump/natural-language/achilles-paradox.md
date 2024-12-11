# 

Source: https://proofwiki.org/wiki/Achilles_Paradox



Paradox
Achilles and a tortoise are to have a race.
Achilles (not surprisingly) is expected to run considerably faster than the tortoise. So, to make it marginally more fair, he gives the tortoise a head start.

But it is apparent that Achilles cannot actually catch up with the tortoise.
Suppose he gives the tortoise a headstart of $x_0$.
By the time he has got to $x_0$, the tortoise has moved on, to $x_1$, say.
But by the time Achilles has reached $x_1$, the tortoise has moved on, to $x_2$, say.

You can continue this indefinitely.

However, it is intuitively obvious that Achilles will eventually overtake the tortoise, as Achilles is faster.


Resolution
It is clear that there is a problem with this reasoning, as it is tantamountly clear that someone running faster than another will overtake, sooner or later.
The solution depends on the concept of a limit.

The sum of the distances run by Achilles in catching up the tortoise is an infinite series whose sequence of partial sums is bounded above.
As such, once Achilles reaches that limit, any further distance he travels will bring him further than the tortoise.
The problem lies in the assumption that Achilles is bounded to points only previously set by the tortoise, however in all practicality this is not the case (Achilles' step size). 

The error lies in measuring the distance Achilles has traveled after a finite number of steps.
We must instead measure the distance after an infinite number of steps with the summation of a series.

Let $a$ and $b$ be the velocities at which Achilles and the tortoise respectively travel.
As Achilles is faster than the tortoise, let $a > b$.
Say Achilles is distance $d_n$ behind the tortoise.
In the time $t = \dfrac {d_n} a$ it will take him to travel that distance, the tortoise will have traveled $b t$ further.
Thus:

$d_{n + 1} = d_n \paren {\dfrac b a}$

The sequence of distances that Achilles must travel is thus the recursive sequence:

$d_n = \begin {cases} h & : n = 0 \\ d_{n - 1} \paren {\dfrac b a} & : \text {otherwise} \end {cases}$
where $h$ is the tortoise's head start.
This is the geometric sequence:

$h, h \paren {\dfrac b a}, h \paren {\dfrac b a}^2, h \paren {\dfrac b a}^3, \ldots$
$a > b$ implies $\size {\dfrac b a} < 1$.
Thus, by Sum of Infinite Geometric Sequence: Corollary 2, the sum $S$ of the sequence is:

$(1): \quad \ds \sum_{i \mathop = 0}^\infty h \paren {\dfrac b a}^i = \dfrac h {1 - \frac b a}$
Thus it takes Achilles:




\(\text {(2)}: \quad\)









\(\ds t\)

\(=\)







\(\ds \frac S a\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {\frac h {1 - \frac b a} } } a\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac h {a \paren {1 - \frac b a} }\)




















\(\ds \)

\(=\)







\(\ds \frac h {a - b}\)









time to catch up to the tortoise.

In this time, the tortoise should travel the same distance as Achilles minus the head start.
That is, the following should hold:

$S - h = b t  $
Indeed:














\(\ds S - h\)

\(=\)







\(\ds \frac h {1 - \frac b a} - h\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {h - h \paren {1 - \frac b a} } {1 - \frac b a}\)




















\(\ds \)

\(=\)







\(\ds \frac {h \paren {\frac b a} } {1 - \frac b a}\)




















\(\ds \)

\(=\)







\(\ds \frac {h b} {a \paren { 1 - \frac b a} }\)




















\(\ds \)

\(=\)







\(\ds b \paren {\frac h {a - b} }\)




















\(\ds \)

\(=\)







\(\ds b t\)





from $(2)$



$\blacksquare$


Also known as
The Achilles paradox is also known as the racehorse paradox.


Historical Note
The Achilles Paradox is one of Zeno's Paradoxes, as famously raised by Zeno of Elea.
Some attention was given to this problem by René Descartes in around $1646$.  However, his solution would not be accepted by today's standards of mathematical rigor.


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{II}$: Modern Minds in Ancient Bodies
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: $\S 2.1$: Achilles and the tortoise
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Achilles paradox: 1.
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Zeno's paradoxes
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Zeno's paradoxes
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Zeno's paradoxes
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Achilles paradox
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Zeno of Elea (5th century bc)
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Achilles paradox
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Zeno of Elea (5th century bc)




