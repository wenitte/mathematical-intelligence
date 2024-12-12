# 

Source: https://proofwiki.org/wiki/Difference_of_Two_Powers/Proof_3

Theorem
Let $\mathbb F$ denote one of the standard number systems, that is $\Z$, $\Q$, $\R$ and $\C$.
Let $n \in \N$ such that $n \ge 2$.

Then for all $a, b \in \mathbb F$:














\(\ds a^n - b^n\)

\(=\)







\(\ds \paren {a - b} \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \paren {a^{n - 1} + a^{n - 2} b + a^{n - 3} b^2 + \dotsb + a b^{n - 2} + b^{n - 1} }\)











Proof
From Sum of Geometric Sequence:















\(\ds \sum_{j \mathop = 0}^{n - 1} x^j\)

\(=\)







\(\ds \frac {x^n - 1} {x - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\dfrac a b}^n - 1\)

\(=\)







\(\ds \paren {\dfrac a b - 1} \sum_{j \mathop = 0}^{n - 1} \paren {\dfrac a b}^j\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\dfrac {a^n - b^n} {b^n} }\)

\(=\)







\(\ds \paren {\dfrac {a - b} b} \paren {\paren {\dfrac a b}^{n - 1} + \paren {\dfrac a b}^{n - 2} + \dotsb + \paren {\dfrac a b}^1 + 1}\)














\(\ds \leadsto \ \ \)





\(\ds a^n - b^n\)

\(=\)







\(\ds \paren {a - b} \paren {a^{n - 1} + a^{n - 2} b + \dotsb + a b^{n - 2} + b^{n - 1} }\)





multiplying both sides by $b^n$



$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 3$: Natural Numbers: Exercise $\S 3.11 \ (2)$




