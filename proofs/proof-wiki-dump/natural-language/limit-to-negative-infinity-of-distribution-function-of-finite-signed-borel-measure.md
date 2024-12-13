# 

Source: https://proofwiki.org/wiki/Limit_to_Negative_Infinity_of_Distribution_Function_of_Finite_Signed_Borel_Measure

Theorem
Let $\mu$ be a finite signed Borel measure on $\R$.
Let $F_\mu$ be the distribution function of $\mu$. 

Then: 

$\ds \lim_{x \mathop \to -\infty} \map {F_\mu} x = 0$
where $\ds \lim_{x \mathop \to -\infty}$ denotes the limit at $-\infty$.


Proof
Let $\tuple {\mu^+, \mu^-}$ be the Jordan decomposition of $\mu$.
From Decomposition of Distribution Function of Finite Signed Borel Measure, we have: 

$F_\mu = F_{\mu^+} - F_{\mu^-}$
where $F_{\mu^+}$ and $F_{\mu^-}$ are the distribution functions of $\mu^+$ and $\mu^-$ respectively.
From Limit of Distribution Function of Finite Borel Measure at Negative Infinity, we have: 

$\ds \lim_{x \mathop \to -\infty} \map {F_{\mu^+} } x = 0$
and:

$\ds \lim_{x \mathop \to -\infty} \map {F_{\mu^-} } x = 0$
From Properties of Limit at Minus Infinity of Real Function: Difference Rule, we have that: 

$\ds \lim_{x \mathop \to -\infty} \paren {\map {F_{\mu^+} } x - \map {F_{\mu^-} } x} = 0 - 0 = 0$
So:

$\ds \lim_{x \mathop \to -\infty} \map {F_\mu} x = 0$
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.4$: Functions of Finite Variation




