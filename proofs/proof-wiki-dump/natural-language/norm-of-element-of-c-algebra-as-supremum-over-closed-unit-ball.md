# 

Source: https://proofwiki.org/wiki/Norm_of_Element_of_C*-Algebra_as_Supremum_over_Closed_Unit_Ball

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $c \in A$.

Then:

$\ds \norm c = \sup_{\norm b \le 1} \norm {c b} = \sup_{\norm b \le 1} \norm {b c}$


Proof
Note that if $c = {\mathbf 0}_A$, we have $\norm c = 0$ and:

$\norm {c b} = \norm {b c} = \norm { {\mathbf 0}_A} = 0$
for each $b \in A$.
Hence we have the theorem in the case $c = {\mathbf 0}_A$.
Now take $c \ne {\mathbf 0}_A$.
From the definition of an algebra norm, we have:

$\norm {c b} \le \norm c \norm b$
and:

$\norm {b c} \le \norm b \norm c$
Hence we have:

$\ds \norm c \le \sup_{\norm b \le 1} \norm {c b}$
and:

$\ds \norm c \le \sup_{\norm b \le 1} \norm {b c}$
From the definition of a Banach $\ast$-algebra, we have:

$\norm c = \norm {c^\ast}$
Note that:

$\ds \norm {\frac {c^\ast} {\norm c} } \le 1$
and:

$\norm {c b} = \frac {\norm {c c^\ast} } {\norm c}$
By the $\text C^\ast$ identity, we have:

$\ds \frac {\norm {c c^\ast} } {\norm c} = \frac {\norm c^2} {\norm c} = \norm c$
So we have:

$\ds \sup_{\norm b \le 1} \norm {c b} \le \norm c$
We conclude:

$\ds \norm c = \sup_{\norm b \le 1} \norm {c b}$
Similarly we have:

$\ds \frac {\norm {c^\ast c} } {\norm c} = \frac {\norm {c c^\ast} } {\norm c} = \frac {\norm c^2} {\norm c} = \norm c$
by the $\text C^\ast$ identity.
We then also obtain:

$\ds \sup_{\norm b \le 1} \norm {b c} \le \norm c$
and hence:

$\ds \norm c = \sup_{\norm b \le 1} \norm {b c}$
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $2.1$: $\text C^\ast$-Algebras




