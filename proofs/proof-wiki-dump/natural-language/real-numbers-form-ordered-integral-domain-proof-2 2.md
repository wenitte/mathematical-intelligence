# 

Source: https://proofwiki.org/wiki/Real_Numbers_form_Ordered_Integral_Domain/Proof_2

Theorem
The set of real numbers $\R$ forms an ordered integral domain under addition and multiplication: $\struct {\R, +, \times, \le}$.


Proof
We have that the real numbers $\struct {\R, +, \times}$ form an integral domain.
It remains to specify a property $P$ on $\R$ such that:

$(1): \quad \forall a, b \in \R: \map P a \land \map P b \implies \map P {a + b}$
$(2): \quad \forall a, b \in \R: \map P a \land \map P b \implies \map P {a \times b}$
$(3): \quad \forall a \in \R: \map P a \lor \map P {-a} \lor a = 0$

We have that the integers $\struct {\Q, +, \times}$ form an ordered integral domain, where $\Q$ denotes the set of rational numbers.
Let $P'$ be the (strict) positivity property on $\struct {\Q, +, \times}$.

Let us define the property $P$ on $\R$ as:

$\forall a \in \R: \map P a \iff a = \eqclass {\sequence {a_n} } {}: \forall n \in \N: \map {P'} {a_n}$
That is, an element $a = \eqclass {\sequence {a_n} } {}$ has $P$ if and only if $a_n$ has (strict) positivity property in $\Q$ for all $n \in \N$.
Now let $a = \eqclass {\sequence {a_n} } {}$ and $b = \eqclass {\sequence {b_n} } {}$ such that $\map P a$ and $\map P b$.
Then by definition of real addition:

$\eqclass {\sequence {a_n} } {} + \eqclass {\sequence {b_n} } {} = \eqclass {\sequence {a_n + b_n} } {}$
and real multiplication:

$\eqclass {\sequence {a_n} } {} \times \eqclass {\sequence {b_n} } {} = \eqclass {\sequence {a_n \times b_n} } {}$
It can be seen from the definition of (strict) positivity $P'$ on $\Q$ that $\map P {a + b}$ and $\map P {a \times b}$.
It can be seen that if $\map P a$ then $\neg \map P {-a}$ and vice versa.
Also we note that $\neg \map P 0$ and of course $\neg \map P {-0}$.
So the property $P$ we defined fulfils the criteria for the (strict) positivity property.
Hence the result.
$\blacksquare$





