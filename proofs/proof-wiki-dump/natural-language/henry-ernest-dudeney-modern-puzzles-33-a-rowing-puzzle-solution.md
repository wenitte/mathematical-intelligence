# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/33_-_A_Rowing_Puzzle/Solution



Modern Puzzles by Henry Ernest Dudeney: $33$
A Rowing Puzzle
A crew can row a certain course upstream in $8 \tfrac 4 7$ minutes,
and, if there were no stream, they could row it in $7$ minutes less than it takes them to drift down the stream.
How long would it take to row down with the stream?


Solution
$3 \tfrac 9 {17}$ minutes.


Proof
Let the course be $d$ miles long.
Let $v$ miles per minute be the speed the crew would be able to row in still water.
Let $v_s$ miles per minute be the speed of the stream.
Let $v_u$ miles per minute be the speed upstream.
Let $v_d$ miles per minute be the speed downstream.

Let $t$ minutes be the time taken to row $d$ miles in still water.
Let $t_u$ minutes be the time taken to row $d$ miles upstream.
Let $t_d$ minutes be the time taken to row $d$ miles downstream.
Let $t_s$ minutes be the time taken to drift $d$ miles downstream without rowing.

We have:




\(\text {(1)}: \quad\)









\(\ds v_u\)

\(=\)







\(\ds \dfrac d {t_u}\)










\(\text {(2)}: \quad\)









\(\ds v\)

\(=\)







\(\ds \dfrac d t\)










\(\text {(3)}: \quad\)









\(\ds v_d\)

\(=\)







\(\ds \dfrac d {t_d}\)










\(\text {(4)}: \quad\)









\(\ds v_s\)

\(=\)







\(\ds \dfrac d {t_s}\)










\(\text {(5)}: \quad\)









\(\ds v_u\)

\(=\)







\(\ds v - v_s\)










\(\text {(6)}: \quad\)









\(\ds v_d\)

\(=\)







\(\ds v + v_s\)










\(\text {(7)}: \quad\)









\(\ds t_u\)

\(=\)







\(\ds 8 \tfrac 4 7\)










\(\text {(8)}: \quad\)









\(\ds t_s - t\)

\(=\)







\(\ds 7\)










Thus:














\(\ds t_u\)

\(=\)







\(\ds \frac d {v_u}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac d {v - v_s}\)





from $(5)$














\(\ds \)

\(=\)







\(\ds \frac {60} 7\)





from $(7)$














\(\ds t - t_s\)

\(=\)







\(\ds \frac d v - \frac d {v_s}\)





from $(2)$ and $(4)$














\(\ds \)

\(=\)







\(\ds d \paren {\frac {v_s - v} {v v_s} }\)




















\(\ds \)

\(=\)







\(\ds 7\)





from $(8)$




Multiplying the two results above:














\(\ds 60\)

\(=\)







\(\ds \frac {60} 7 \times 7\)




















\(\ds \)

\(=\)







\(\ds \frac d {v - v_s} \times d \paren {\frac {v_s - v} {v v_s} }\)




















\(\ds \)

\(=\)







\(\ds \frac {d^2} {v v_s}\)




















\(\ds \)

\(=\)







\(\ds t t_s\)





from $(2)$ and $(4)$




Substituting $t = t_s + 7$:














\(\ds t t_s\)

\(=\)







\(\ds t_s \paren {t_s + 7}\)




















\(\ds \)

\(=\)







\(\ds 60\)














\(\ds \leadsto \ \ \)





\(\ds t_s^2 + 7 t_s - 60\)

\(=\)







\(\ds 0\)




















\(\ds \paren {t_s + 12} \paren {t_s - 5}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds t_s\)

\(=\)







\(\ds 5 \text{ or } -12\)









We reject $t_s = -12$ as $t_s > 0$.
Thus $t_s = 5$ and $t = 12$.

Therefore:














\(\ds t_d\)

\(=\)







\(\ds \frac d {v_d}\)





from $(3)$














\(\ds \)

\(=\)







\(\ds \frac d {v + v_s}\)





from $(6)$














\(\ds \)

\(=\)







\(\ds \frac d {\frac d t + \frac d {t_s} }\)





from $(2)$ and $(4)$














\(\ds \)

\(=\)







\(\ds \paren {\frac 1 t + \frac 1 {t_s} }^{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac 1 {12} + \frac 1 5 }^{-1}\)




















\(\ds \)

\(=\)







\(\ds \frac {60} {17}\)




















\(\ds \)

\(=\)







\(\ds 3 \tfrac 9 {17}\)









Hence the result.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $33$. -- A Rowing Puzzle
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $61$. A Rowing Puzzle




