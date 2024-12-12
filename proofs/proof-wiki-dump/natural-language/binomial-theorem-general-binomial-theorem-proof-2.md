# 

Source: https://proofwiki.org/wiki/Binomial_Theorem/General_Binomial_Theorem/Proof_2



Theorem
Let $\alpha \in \R$ be a real number.
Let $x \in \R$ be a real number such that $\size x < 1$.

Then:














\(\ds \paren {1 + x}^\alpha\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\alpha^{\underline n} } {n!} x^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dbinom \alpha n x^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!} \paren {\prod_{k \mathop = 0}^{n - 1} \paren {\alpha - k} } x^n\)




















\(\ds \)

\(=\)







\(\ds 1 + \alpha x + \dfrac {\alpha \paren {\alpha - 1} } {2!} x^2 + \dfrac {\alpha \paren {\alpha - 1} \paren {\alpha - 2} } {3!} x^3 + \cdots\)









where:

$\alpha^{\underline n}$ denotes the falling factorial
$\dbinom \alpha n$ denotes a binomial coefficient.


Proof
From Sum over k of r-kt choose k by r over r-kt by z^k:

$\ds \sum_n \dbinom {\alpha - n t} k \dfrac \alpha {\alpha - n t} z^n = x^\alpha$
where:

$z = x^{t + 1} - x^t$
$x = 1$ for $z = 0$.
Setting $t = 0$:














\(\ds \sum_k \dbinom {\alpha - n \times 0} n \dfrac \alpha {\alpha - n \times 0} z^n\)

\(=\)







\(\ds x^\alpha\)














\(\ds \leadsto \ \ \)





\(\ds \sum_n \dbinom \alpha n \dfrac \alpha \alpha z^n\)

\(=\)







\(\ds \paren {1 + z}^\alpha\)














\(\ds \leadsto \ \ \)





\(\ds \sum_n \dbinom \alpha n z^n\)

\(=\)







\(\ds \paren {1 + z}^\alpha\)









$\blacksquare$


Historical Note
The General Binomial Theorem was first conceived by Isaac Newton during the years $1665$ to $1667$ when he was living in his home in Woolsthorpe.
He announced the result formally, in letters to Henry Oldenburg on $13$th June $1676$ and $24$th October $1676$ but did not provide a proper proof (at that time the need for the appropriate level of rigor had not been recognised).
Leonhard Paul Euler made an incomplete attempt in $1774$, but the full proof had to wait for Carl Friedrich Gauss to provide it in $1812$.
This was, in fact, the first time anything about infinite summations was proved adequately.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: Exercise $4$




