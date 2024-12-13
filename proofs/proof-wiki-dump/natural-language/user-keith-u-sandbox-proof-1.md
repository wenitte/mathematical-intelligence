# 

Source: https://proofwiki.org/wiki/User:Keith.U/Sandbox/Proof_1

Theorem
Let $a \in \R$ be a real number such that $a < 1$.
Let $x \in \R_{>0}$ be a strictly positive real number such that $x < 1$.

Then:

$1 < a^x < 1 + a x$



This article, or a section of it, needs explaining.In particular: See whether there is a proof of this based on Bernoulli's InequalityYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
Define a real function $g_x: \R_{> 0} \to \R$ as:

$g_x \left({a}\right) = 1 + a x - a^x$
Then differentiating with respect to $a$ gives:

$D_a g_x \left({a}\right) = x \left({1 - a^{x-1} }\right)$

We show now that the derivative of $g_x$ is positive for all $a > 1$:














\(\ds x\)

\(<\)







\(\ds 1\)














\(\ds \implies \ \ \)





\(\ds x - 1\)

\(<\)







\(\ds 0\)





Subtract $1$ from both sides








\(\ds \implies \ \ \)





\(\ds a^{x - 1}\)

\(<\)







\(\ds a^0\)





Power Function on Base Greater than One is Strictly Increasing: Rational Number








\(\ds \implies \ \ \)





\(\ds a^{x - 1}\)

\(<\)







\(\ds 1\)





Definition of Integer Power








\(\ds \implies \ \ \)





\(\ds -1\)

\(<\)







\(\ds -a^{x - 1}\)





Order of Real Numbers is Dual of Order of their Negatives








\(\ds \implies \ \ \)





\(\ds 0\)

\(<\)







\(\ds 1 - a^{x - 1}\)





Add $1$ to both sides








\(\ds \implies \ \ \)





\(\ds 0\)

\(<\)







\(\ds x \left({1 - a^{x - 1} }\right)\)





Multiply both sides by $x > 0$








\(\ds \implies \ \ \)





\(\ds 0\)

\(<\)







\(\ds D_a g_x \left({a}\right)\)





Definition of $g_x \left({a}\right)$




So $D_a g_x \left({a}\right)$ is positive for all $a > 1$.
Whence, by Derivative of Monotone Function, $g_x$ is increasing for all $a > 1$.

Now, $g_x \left({1}\right) = x > 0$.
So $g_x \left({a}\right)$ is positive for all $a > 1$.
That is:

$0 < 1 + a x - a^x$
Adding $a^x$ to both sides of the above yields:

$a^x < 1 + a x$

Finally:














\(\ds 0\)

\(<\)







\(\ds x\)














\(\ds \implies \ \ \)





\(\ds a^0\)

\(<\)







\(\ds a^x\)





Power Function on Base Greater than One is Strictly Increasing: Rational Number








\(\ds \implies \ \ \)





\(\ds 1\)

\(<\)







\(\ds a^x\)





Definition of Integer Power




So, for $0 < x < 1$:

$1 < a^x < 1 + a x$
$\blacksquare$





