# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/26_-_What_is_the_Time/Solution



Modern Puzzles by Henry Ernest Dudeney: $26$
What is the Time?
At what time are the two hands of a clock so situated that,
reckoning as minute points past $\textit {XII}$,
one is exactly the square of the distance of the other?


Solution
The time can be:

$5$ seconds past $\text {XII}$
or:

$6 \tfrac 3 4$ minutes past $\text {IX}$.


Proof
The minute hand by definition moves $1$ minute point per minute.
The hour hand moves $5$ minute points per $60$ minutes, or $\dfrac 1 {12}$ minute points per minute.
The question does not state whether the hand whose minute point is the square of the distance of the other is the hour hand or the minute hand, so the analysis will be done on both.

Let $t = h : m$ be the time of day in $h$ hours and $m$ minutes of the particular instant of interest.
Thus:

$m$ is the number of minute points of the minute hand past $\text {XII}$
$5 h + \dfrac m {12}$ is the number of minute points of the hour hand past $\text {XII}$.
while we are constrained by the inequalities:

$0 \le m < 60$
$0 \le h < 12$
and such that $h$ is an integer.


Hour Hand Position is Square of Minute Hand Position
Let $t = h : m$ be the time of day at which the position of the hour hand is the square of the distance of the minute hand.
We have that:














\(\ds 5 h + \dfrac m {12}\)

\(=\)







\(\ds m^2\)














\(\ds \leadsto \ \ \)





\(\ds 12 m^2 - m - 60 h\)

\(=\)







\(\ds 0\)










Hence from the Quadratic Formula:














\(\ds m\)

\(=\)







\(\ds \dfrac {1 \pm \sqrt {1 + 4 \times 12 \times 60 h} } {24}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 \pm \sqrt {2880 h + 1} } {24}\)










We can solve this quadratic in $m$ if and only if its discriminant $D$ is non-negative.
That is, if and only if:














\(\ds \paren {-1}^2 - 4 \times 12 \times 60 h\)

\(\ge\)







\(\ds 0\)





Definition of Discriminant of Quadratic Equation








\(\ds \leadsto \ \ \)





\(\ds 2880 h + 1\)

\(\ge\)







\(\ds 0\)









which is in fact any value of $h$ we like.

We can try various $h$ and see what happens.

We start by calculating the discriminant $D$ for each $h$ from $0$ to $11$ and see what happens:











\(\ds h = 0: \, \)



\(\ds D\)

\(=\)







\(\ds 1\)
















\(\ds h = 1: \, \)



\(\ds D\)

\(=\)







\(\ds 2880 \times 1 + 1\)

\(\ds = 2881\)














\(\ds h = 2: \, \)



\(\ds D\)

\(=\)







\(\ds 2880 \times 2 + 1\)

\(\ds = 5761\)














\(\ds h = 3: \, \)



\(\ds D\)

\(=\)







\(\ds 2880 \times 3 + 1\)

\(\ds = 8641\)














\(\ds h = 4: \, \)



\(\ds D\)

\(=\)







\(\ds 2880 \times 4 + 1\)

\(\ds = 11521\)














\(\ds h = 5: \, \)



\(\ds D\)

\(=\)







\(\ds 2880 \times 5 + 1\)

\(\ds = 14401\)














\(\ds h = 6: \, \)



\(\ds D\)

\(=\)







\(\ds 2880 \times 6 + 1\)

\(\ds = 17281\)














\(\ds h = 7: \, \)



\(\ds D\)

\(=\)







\(\ds 2880 \times 7 + 1\)

\(\ds = 20161\)














\(\ds h = 8: \, \)



\(\ds D\)

\(=\)







\(\ds 2880 \times 8 + 1\)

\(\ds = 23041\)














\(\ds h = 9: \, \)



\(\ds D\)

\(=\)







\(\ds 2880 \times 9 + 1\)

\(\ds = 25921\)














\(\ds h = 10: \, \)



\(\ds D\)

\(=\)







\(\ds 2880 \times 9 + 1\)

\(\ds = 28801\)














\(\ds h = 11: \, \)



\(\ds D\)

\(=\)







\(\ds 2880 \times 9 + 1\)

\(\ds = 31681\)








The exposition specifically states:

one is exactly the square of the distance of the other
which in the naïve language of Dudeney means that the times must be expressible as rational numbers.
Of the above discriminants, only $1 = 1^2$ and $25921 = 161^2$ are square numbers.

So, when $h = 0$ we have:














\(\ds 12 m^2 - m - 60 \times 0\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds m \paren {12 - m}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds \dfrac 1 {12} \text { or } 0\)









This leads to:

the degenerate solution of $\text {XII}$
the time of $\dfrac 1 {12}$ of a minute, that is, $5$ seconds, past $\text {XII}$.
Dudeney implicitly ignores the degenerate solution, and accepts the fractional minute under protest.

When $h = 9$, we have:














\(\ds 12 m^2 - m - 60 \times 9\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds \dfrac {1 \pm \sqrt {25921} } {24}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {162} {24}\)




















\(\ds \)

\(=\)







\(\ds 6 \tfrac 3 4\)









Hence the time is $6 \tfrac 3 4$ minutes past $\text {IX}$.
$\Box$


Minute Hand Position is Square of Hour Hand Position
Let $t = h : m$ be the time of day at which the position of the minute hand is the square of the distance of the hour hand.
We have that:














\(\ds \paren {5 h + \dfrac m {12} }^2\)

\(=\)







\(\ds m\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds 25 h^2 + \dfrac {10 h m} {12} + \dfrac {m^2} {144}\)

\(=\)







\(\ds m\)














\(\ds \leadsto \ \ \)





\(\ds 3600 h^2 + 120 h m + m^2\)

\(=\)







\(\ds 144 m\)














\(\ds \leadsto \ \ \)





\(\ds m^2 + \paren {120 h - 144} m + 3600 h^2\)

\(=\)







\(\ds 0\)










We can solve this quadratic in $m$ if and only if its discriminant is non-negative.
That is, if and only if:














\(\ds \paren {120 h - 144}^2 - 4 \times 3600 h^2\)

\(\ge\)







\(\ds 0\)





Definition of Discriminant of Quadratic Equation








\(\ds \leadsto \ \ \)





\(\ds \paren {5 h - 6}^2 - 25 h^2\)

\(\ge\)







\(\ds 0\)





dividing by $576$








\(\ds \leadsto \ \ \)





\(\ds 25 h^2 - 60 h + 36 - 25 h^2\)

\(\ge\)







\(\ds 0\)





multiplying out








\(\ds \leadsto \ \ \)





\(\ds 3 - 5 h\)

\(\ge\)







\(\ds 0\)





simplifying




The above can happen only when $h = 0$, which gives us:














\(\ds m^2 + \paren {120 \times 0 - 144} m + 3600 \times 0\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds m^2 - 144 m\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds 144\)









But such an $m$ does not satisfy the inequality:

$0 \le m < 60$
Hence there is no time of day at which the position of the minute hand is the square of the distance of the hour hand. 
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $26$. -- What is the Time?
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $47$. What is the Time?




