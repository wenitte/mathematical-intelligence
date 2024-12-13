# 

Source: https://proofwiki.org/wiki/Power_Function_on_Base_greater_than_One_tends_to_One_as_Power_tends_to_Zero/Rational_Number/Lemma

Theorem
Let $a \in \R$ be a real number such that $a > 1$.
Let $r \in \Q_{> 0}$ be a strictly positive rational number such that $r < 1$.

Then:

$1 < a^r < 1 + a r$



This article, or a section of it, needs explaining.In particular: See whether there is a proof of this based on Bernoulli's InequalityYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
Define a real function $g_r: \R_{> 0} \to \R$ as:

$\map {g_r} a = 1 + a r - a^r$
Then differentiating with respect to $a$ gives:

$D_a \map {g_r} a = r \paren {1 - a^{r - 1} }$

We show now that the derivative of $g_r$ is positive for all $a > 1$:














\(\ds r\)

\(<\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds r - 1\)

\(<\)







\(\ds 0\)





Subtract $1$ from both sides








\(\ds \leadsto \ \ \)





\(\ds a^{r - 1}\)

\(<\)







\(\ds a^0\)





Power Function on Base Greater than One is Strictly Increasing: Rational Number








\(\ds \leadsto \ \ \)





\(\ds a^{r - 1}\)

\(<\)







\(\ds 1\)





Definition of Integer Power








\(\ds \leadsto \ \ \)





\(\ds -1\)

\(<\)







\(\ds -a^{r - 1}\)





Order of Real Numbers is Dual of Order of their Negatives








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds 1 - a^{r - 1}\)





adding $1$ to both sides








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds r \left({1 - a^{r - 1} }\right)\)





multiplying both sides by $r > 0$








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds D_a \map {g_r} a\)





from the formula found for $D_a \map {g_r} a$ above




So $D_a \map {g_r} a$ is positive for all $a > 1$.
Whence, by Derivative of Monotone Function, $g_r$ is increasing for all $a > 1$.

Now:

$\map {g_r} 1 = r > 0$
So $\map {g_r} a$ is positive for all $a > 1$.
That is:

$0 < 1 + a r - a^r$
Adding $a^r$ to both sides of the above yields:

$a^r < 1 + a r$

Finally:














\(\ds 0\)

\(<\)







\(\ds r\)














\(\ds \leadsto \ \ \)





\(\ds a^0\)

\(<\)







\(\ds a^r\)





Power Function on Base Greater than One is Strictly Increasing: Rational Number








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(<\)







\(\ds a^r\)





Definition of Integer Power




So, for $0 < r < 1$:

$1 < a^r < 1 + a r$
$\blacksquare$





