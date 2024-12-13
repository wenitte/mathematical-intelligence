# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/135_-_Distributing_Nuts/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $135$
Distributing Nuts
Aunt Martha bought some nuts.
She gave Tommy one nut and a quarter of the remainder;
Bessie then received one nut and a quarter of what were left;
Bob, one nut and a quarter of the remainder;
and, finally, Jessie received one nut and a quarter of the remainder.
It was then noticed that the boys had received exactly $100$ nuts more than the girls.
How many nuts had Aunt Martha retained for her own use?


Solution
Aunt Martha kept $321$ nuts for herself.


Proof
Let $n$ be the total number of nuts.
Let $a$, $b$, $c$, $d$ and $m$ be the number of nuts received or retained by Tommy, Bessie, Bob, Jessie and Aunt Martha respectively.
We have:




\(\text {(1)}: \quad\)









\(\ds a + b + c + d + m\)

\(=\)







\(\ds n\)










\(\text {(2)}: \quad\)









\(\ds a\)

\(=\)







\(\ds 1 + \dfrac {n - 1} 4\)





She gave Tommy one nut and a quarter of the remainder;




\(\text {(3)}: \quad\)









\(\ds b\)

\(=\)







\(\ds 1 + \dfrac {n - a - 1} 4\)





Bessie then received one nut and a quarter of what were left;




\(\text {(4)}: \quad\)









\(\ds c\)

\(=\)







\(\ds 1 + \dfrac {n - a - b - 1} 4\)





Bob, one nut and a quarter of the remainder;




\(\text {(5)}: \quad\)









\(\ds d\)

\(=\)







\(\ds 1 + \dfrac {n - a - b - c - 1} 4\)





and, finally, Jessie received one nut and a quarter of the remainder.




\(\text {(6)}: \quad\)









\(\ds a + c\)

\(=\)







\(\ds b + d + 100\)





It was then noticed that the boys had received exactly $100$ nuts more than the girls.



Rewriting $(1)$ to $(5)$ in a more convenient form:




\(\text {(1)}: \quad\)









\(\ds m\)

\(=\)







\(\ds n - a - b - c - d\)










\(\text {(2)}: \quad\)









\(\ds 4 a\)

\(=\)







\(\ds n + 3\)










\(\text {(3)}: \quad\)









\(\ds 4 b\)

\(=\)







\(\ds n - a + 3\)










\(\text {(4)}: \quad\)









\(\ds 4 c\)

\(=\)







\(\ds n - a - b + 3\)










\(\text {(5)}: \quad\)









\(\ds 4 d\)

\(=\)







\(\ds n - a - b - c + 3\)














\(\ds \leadsto \ \ \)





\(\ds 4 b\)

\(=\)







\(\ds 3 a\)














\(\ds \leadsto \ \ \)





\(\ds 4 c\)

\(=\)







\(\ds 3 b\)














\(\ds \leadsto \ \ \)





\(\ds 4 d\)

\(=\)







\(\ds 3 c\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds n - a - b - c - \dfrac {3 c} 4\)




















\(\ds \)

\(=\)







\(\ds n - a - b - \dfrac 7 4 c\)




















\(\ds \)

\(=\)







\(\ds n - a - b - \dfrac 7 4 \times \dfrac 3 4 b\)




















\(\ds \)

\(=\)







\(\ds n - a - \dfrac {37} {16} b\)




















\(\ds \)

\(=\)







\(\ds n - a - \dfrac {37} {16} \dfrac 3 4 a\)




















\(\ds \)

\(=\)







\(\ds n - a - \dfrac {111} {64} a\)




















\(\ds \)

\(=\)







\(\ds n - \dfrac {175} {64} a\)









At this stage we recognise that $a$, $b$, $c$ and $c$ must be positive integers, which gives us the obvious Ansatz:














\(\ds a\)

\(=\)







\(\ds 64\)




















\(\ds b\)

\(=\)







\(\ds \dfrac 3 4 \times 64 = 48\)




















\(\ds c\)

\(=\)







\(\ds \dfrac 3 4 \times 48 = 36\)




















\(\ds d\)

\(=\)







\(\ds \dfrac 3 4 \times 36 = 27\)









We note that:

$a + c = 100$
$b + d = 75$













\(\ds a + c\)

\(=\)







\(\ds 100\)




















\(\ds b + d\)

\(=\)







\(\ds 75\)









giving a difference between $a + c$ and $b + d$ of $25$.
So we multiply our Ansatz by $4$ to get:














\(\ds a\)

\(=\)







\(\ds 256\)




















\(\ds b\)

\(=\)







\(\ds 192\)




















\(\ds c\)

\(=\)







\(\ds 144\)




















\(\ds d\)

\(=\)







\(\ds 108\)









We see that:














\(\ds a + c\)

\(=\)







\(\ds 400\)




















\(\ds b + d\)

\(=\)







\(\ds 300\)









giving the appropriate difference.
Thus:














\(\ds 4 a\)

\(=\)







\(\ds n + 3\)





recalling $(2)$








\(\ds \leadsto \ \ \)





\(\ds n\)

\(=\)







\(\ds 4 \times 256 - 3\)




















\(\ds \)

\(=\)







\(\ds 1021\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds 1021 - 256 - 192 - 144 - 108\)




















\(\ds \)

\(=\)







\(\ds 321\)









$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $135$. -- Distributing Nuts
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $208$. Distributing Nuts




