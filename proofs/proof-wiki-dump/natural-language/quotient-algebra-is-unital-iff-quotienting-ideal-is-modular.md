# 

Source: https://proofwiki.org/wiki/Quotient_Algebra_is_Unital_iff_Quotienting_Ideal_is_Modular



Theorem
Let $R$ be a ring. 
Let $A$ be a $R$-algebra.
Let $I$ be an proper ideal of $A$.
Let $A/I$ be the quotient algebra of $A$ modulo $I$.

Then $A/I$ is unital if and only if $I$ is modular.


Proof
Necessary Condition
Suppose that $A/I$ is unital.
That is, there exists $u \in I$ such that:

$\paren {a + I} \paren {u + I} = \paren {u + I} \paren {a + I} = a + I$
for each $a \in A$.
That is:

$a u + I = u a + I = a + I$
Hence, we have:

$a - a u \in I$
and:

$a - u a \in I$
for each $a \in A$.
So $I$ is a modular ideal.


Sufficient Condition
Let $u \in I$ be such that:

$a - a u \in I$
and:

$a - u a \in I$
for each $a \in A$.
Then we have:

$a + I = a u + I$
and:

$a + I = u a + I$
In other words:

$a + I = \paren {a + I} \paren {u + I}$
and:

$a + I = \paren {u + I} \paren {a + I}$
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $1.1$: Banach Algebras




