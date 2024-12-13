# 

Source: https://proofwiki.org/wiki/Rational_Numbers_form_Ordered_Integral_Domain



Theorem
The rational numbers $\Q$ form an ordered integral domain under addition and multiplication.


Proof 1
This follows directly from Rational Numbers form Totally Ordered Field:
The set of rational numbers $\Q$ forms an ordered field under addition and multiplication: $\struct {\Q, +, \times, \le}$.
An ordered field is also an ordered integral domain.
$\blacksquare$


Proof 2
We have that the rational numbers $\struct {\Q, +, \times}$ form an integral domain.
It remains to specify a property $P$ on $\Q$ such that:

$(1): \quad \forall a, b \in \Q: \map P a \land \map P b \implies \map P {a + b}$
$(2): \quad \forall a, b \in \Q: \map P a \land \map P b \implies \map P {a \times b}$
$(3): \quad \forall a \in \Q: \map P a \lor \map P {-a} \lor a = 0$

We have that the integers $\struct {\Z, +, \times}$ form an ordered integral domain.
Let $P'$ be the (strict) positivity property on $\struct {\Z, +, \times}$.

Let us define the property $P$ on $\Q$ as:

$\forall a \in \Q: \map P a \iff a = \dfrac p q: \map {P'} p, \map {P'} q$
That is, an element $a = \dfrac p q$ has $P$ if and only if both $p$ and $q$ have the (strict) positivity property in $\Z$.
Now let $a = \dfrac p q$ and $b = \dfrac r s$ such that $\map P a$ and $\map P b$.
Then by definition of rational addition:

$\dfrac p q + \dfrac r s = \dfrac {p s + r q} {q s}$
and rational multiplication:

$\dfrac p q \times \dfrac r s = \dfrac {p r} {q s}$
It can be seen from the definition of (strict) positivity $P'$ on $\Z$ that $\map P {a + b}$ and $\map P {a \times b}$.
It can be seen that if $\map P a$ then $\neg \map P {-a}$ and vice versa.
Also we note that $\neg \map P 0$ and of course $\neg \map P {-0}$.
So the property $P$ we defined fulfils the criteria for the (strict) positivity property.
Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 7$. Order: Example $9$




