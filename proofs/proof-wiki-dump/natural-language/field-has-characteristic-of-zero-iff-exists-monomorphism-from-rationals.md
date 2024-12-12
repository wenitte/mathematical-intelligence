# 

Source: https://proofwiki.org/wiki/Field_has_Characteristic_of_Zero_iff_exists_Monomorphism_from_Rationals



Theorem
Let $F$ be a field.
Then:

there exists a field monomorphism $\phi: \Q \to F$ from the field of rational numbers $\Q$ and $F$.
if and only if:

$\Char F = 0$
where $\Char F$ denotes the characteristic of $F$.


Proof
Necessary Condition
Let $\Char F = 0$.
Then from Field of Characteristic Zero has Unique Prime Subfield, $F$ has a unique prime subfield $K$ such that:

$K \cong \Q$
where $\cong$ denotes isomorphism.

Thus there exists an isomorphism from $\Q$ to a subfield of $F$.
From Injection to Image is Bijection, it follows that $\phi$ is an injection into $F$.
Hence the result by definition of field monomorphism.
$\blacksquare$


Sufficient Condition
Let there exists a field monomorphism $\phi: \Q \to F$ from the field of rational numbers $\Q$ and $F$.
Let $K := \Img \phi$.
Then $K$ is isomorphic to $\Q$.
As $K$ is a subfield of $F$, both $0$ and $1$ are in $K$.
From Characteristic of Field is Zero or Prime, either $\Char F = 0$ or $\Char F = p$ for some prime number $p$.
Aiming for a contradiction, suppose $\Char F = p$.
Then:

$p \cdot 1 = 0$
But as $1 \in K$ it follows that $p \cdot 1 \in K$ as $K$ is closed under addition.
But as $K \cong \Q$ this cannot happen
Hence there is no prime number $p$ such that $\Char F = p$.
The result follows by Proof by Contradiction.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $3$: Field Theory: Definition and Examples of Field Structure: $\S 89 \beta$




