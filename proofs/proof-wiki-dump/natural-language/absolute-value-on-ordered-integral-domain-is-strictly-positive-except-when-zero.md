# 

Source: https://proofwiki.org/wiki/Absolute_Value_on_Ordered_Integral_Domain_is_Strictly_Positive_except_when_Zero



Theorem
Let $\struct {D, +, \times, \le}$ be an ordered integral domain.
For all $a \in D$, let $\size a$ denote the absolute value of $a$.

Then $\size a$ is (strictly) positive except when $a = 0$.


Proof
Let $P$ be the (strict) positivity property on $D$.
Let $<$ be the (strict) total ordering defined on $D$ as:

$a < b \iff a \le b \land a \ne b$
From the trichotomy law, exactly one of three possibilities holds for any $ a \in D$:

$(1): \quad \map P a$:
In this case $0 < a$ and so $\size a = a$.
So:

$\map P a \implies \map P {\size a}$

$(2): \quad \map P {-a}$:
In this case $a < 0$ and so $\size a = -a$.
So:

$\map P {-a} \implies \map P {\size a}$

$(3): \quad a = 0$:
In this case $\size a = a$.
So:

$a = 0 \implies \size a = 0$.

Hence the result.
$\blacksquare$


Also see
Absolute Value is Bounded Below by Zero


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 7$. Order




