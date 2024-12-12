# 

Source: https://proofwiki.org/wiki/User:Byte_Me/Sandbox

Theorem
The nth root of any integer is irrational if the nth root is not an integer.

Proof
Let $p$ be an integer.
Suppose that the nth root of $p$ is rational.
Then there exist $a$ and $b$ which are natural numbers and coprime such that:














\(\ds p^{1/n}\)

\(=\)







\(\ds \frac a b\)














\(\ds \implies \ \ \)





\(\ds p\)

\(=\)







\(\ds \frac {a^n} {b^n}\)










This article, or a section of it, needs explaining.In particular: What does "no new factors are introduced" mean? Can this lemma be factored out, or is it already on the site?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Since $p$ is an integer, $a$ and $b$ must share a common factor. However, since $a$ and $b$ are coprime, $a^n$ and $b^n$ are coprime because no new factors are introduced.
Thus, $b$ must equal 1.














\(\ds p\)

\(=\)







\(\ds a^n\)














\(\ds \implies \ \ \)





\(\ds \frac p a\)

\(=\)







\(\ds a^{n-1}\)









Since $n-1$ and $a$ are both integers, $a^{n-1}$ must be an integer. 
Thus, $\frac p a$ must be an integer, which is a contradiction because this implies that $a$ divides a prime factor of $p$.
So, the Nth root of an integer must be irrational.
$\blacksquare$





