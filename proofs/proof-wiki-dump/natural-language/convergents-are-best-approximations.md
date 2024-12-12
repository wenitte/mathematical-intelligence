# 

Source: https://proofwiki.org/wiki/Convergents_are_Best_Approximations



Theorem
Let $x$ be an irrational number.
Let $\sequence {p_n}_{n \mathop \ge 0}$ and $\sequence {q_n}_{n \mathop \ge 0}$ be the numerators and denominators of its continued fraction expansion.
Let $\dfrac {p_n} {q_n}$ be the $n$th convergent.
Let $\dfrac a b$ be any rational number such that $0 < b < q_{n + 1}$.

Then:

$\forall n > 1: \size {q_n x - p_n} \le \size {b x - a}$
The equality holds only if $a = p_n$ and $b = q_n$.


Corollary
Each convergent $\dfrac {p_n} {q_n}$ is a best rational approximation to $x$.
That is, for any rational number $\dfrac a b$ such that $1 \le b \le q_n$:

$\size {x - \dfrac {p_n} {q_n} } \le \size {x - \dfrac a b}$

The equality holds only if $a = p_n$ and $b = q_n$.


Proof
Let $\dfrac a b$ be a rational number in canonical form such that $b < q_{n + 1}$.
Suppose it is not true that $a = p_n$ and $b = q_n$, in which case the equality certainly holds.
Consider the system of equations:














\(\ds a\)

\(=\)







\(\ds r p_n + s p_{n + 1}\)




















\(\ds b\)

\(=\)







\(\ds r q_n + s q_{n + 1}\)









Multiplying the first by $q_n$, and the second by $p_n$, then subtracting, we get:

$a q_n - b p_n = s \paren {p_{n + 1} q_n - p_n q_{n + 1} }$

After applying Difference between Adjacent Convergents of Simple Continued Fraction we get:














\(\ds s\)

\(=\)







\(\ds \paren {-1}^{n + 1} \paren {a q_n - b p_n}\)




















\(\ds r\)

\(=\)







\(\ds \paren {-1}^{n + 1} \paren {b p_{n + 1} - a q_{n + 1} }\)





by a similar process



So $r$ and $s$ are integers.
Neither of them is $0$ because:

if $r = 0$ then $a q_{n + 1} = b p_{n + 1}$, and Euclid's Lemma means $q_{n + 1} \divides b$ as $p_{n + 1} \perp q_{n + 1}$, which contradicts $0 < b < q_{n + 1}$
if $s = 0$ we have $\dfrac a b = \dfrac {p_n} {q_n}$ and this we have already excluded as a special case.

The validity of the material on this page is questionable.In particular: the below needs to link to a stronger resultYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
From Even Convergent of Simple Continued Fraction is Strictly Smaller than Odd Convergent, the convergents are alternately greater than and less than $x$.
Hence since $0 < b = r q_n + s q_{n + 1} < q_{n + 1}$, the integers $r$ and $s$ must have opposite sign.
It follows that $r \paren {q_n x - p_n}$ and $s \paren {q_{n + 1} x - p_{n + 1} }$ have the same sign.
This is necessary for the Triangle Inequality to hold.
So:














\(\ds \size {b x - a}\)

\(=\)







\(\ds \size {\paren {r q_n + s q_{n + 1} } x - \paren {r p_n + s p_{n+1} } }\)




















\(\ds \)

\(=\)







\(\ds \size {r \paren {q_n x - p_n} + s \paren {q_{n + 1} x - p_{n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \size r \size {q_n x - p_n} + \size s \size {q_{n + 1} x - p_{n + 1} }\)




















\(\ds \)

\(>\)







\(\ds \size r \size {q_n x - p_n}\)




















\(\ds \)

\(\ge\)







\(\ds \size {q_n x - p_n}\)









as we wanted to prove.
$\blacksquare$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): continued fraction




