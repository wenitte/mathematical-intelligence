# 

Source: https://proofwiki.org/wiki/Positive_Part_of_Darboux_Integrable_Function_is_Integrable/Negative_Part

Theorem
Let $f$ be a real function that is Darboux integrable over $\closedint a b$.
Let $f^-$ be the negative part of $f$.
Then $f^-$ is Darboux integrable over $\closedint a b$.


Proof
$f^-$ is the positive part of $\map g x = -\map f x$.
From Linear Combination of Definite Integrals, it follows that:

$\ds \int_a^b \map g x \rd x = -\int_a^b \map f x \rd x$
Therefore, by Positive Part of Darboux Integrable Function is Integrable, $f^-$ is Darboux integrable over $\closedint a b$.
$\blacksquare$





