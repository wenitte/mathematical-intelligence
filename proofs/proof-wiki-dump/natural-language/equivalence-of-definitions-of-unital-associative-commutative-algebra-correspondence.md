# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Unital_Associative_Commutative_Algebra/Correspondence



Theorem
Let $A$ be a commutative ring with unity.
Let $B$ be a algebra over $A$ that is unital, associative and commutative.
Let $\struct {C, f}$ be a ring under $A$.

The following statements are equivalent:

$(1): \quad C$ is the underlying ring of $B$ and $f: A \to C$ is the canonical homomorphism to the unital algebra $B$.
$(2): \quad B$ is the algebra defined by $f$.


Proof
Let $\cdot: A \times B \to B$ the ring action of $B$.


$(1)$ implies $(2)$
Let $C$ equal the underlying ring of $B$ and $f: A \to C$ equal the canonical mapping to the unital algebra $B$.
We show that $B$ is the algebra defined by $f$.


Addition
By definition of the underlying ring of $B$, the addition of $C$ is the addition of $B$, say $+$.
By definition of the module defined by $f$, the addition of the algebra defined by $f$ is also $+$.


Multiplication
By definition of the underlying ring of $B$, the multiplication of $C$ is the ring product of $B$, say $\times$.
By definition of the algebra defined by $f$, its multiplication is also $\times$.


Ring action
It remains to show that the ring action $\cdot$ of $B$ is the ring action $*$ of the module defined by $f$.
We have, for $a \in A$ and $b \in B$:














\(\ds a * b\)

\(=\)







\(\ds \map f a \times b\)





Definition of Module Defined by Ring Homomorphism














\(\ds \)

\(=\)







\(\ds \paren {a \cdot 1_B} \times b\)





Definition of Canonical Homomorphism from Ring to Unital Algebra














\(\ds \)

\(=\)







\(\ds a \cdot \paren {1_B \times b}\)





Definition of Bilinear Mapping














\(\ds \)

\(=\)







\(\ds a \cdot b\)





Definition of Unit of Algebra



$\Box$


2 implies 1
Let $B$ equal the algebra defined by $f$.


Addition
By definition of the module defined by $f$, the addition of $B$ is the addition of $C$, say $+$.
By definition of the underlying ring of $B$, its addition is also $+$.


Multiplication
By definition of the algebra defined by $f$, the multiplication of $B$ is the ring product of $C$, say $\times$.
By definition of the underlying ring of $B$, its multiplication is also $\times$.
Thus $C$ is the underlying ring of $B$.


Homomorphism
By Identity is Unique, the unit $1_B$ of $B$ equals the unity $1_C$ of $C$.
Let $g: A \to B$ be the canonical mapping.
We show that $g = f$.
We have, for $a \in A$:














\(\ds \map g a\)

\(=\)







\(\ds a \cdot 1_B\)





Definition of Canonical Homomorphism from Ring to Unital Algebra














\(\ds \)

\(=\)







\(\ds a \cdot 1_C\)





$1_B = 1_C$














\(\ds \)

\(=\)







\(\ds \map f a \times 1_C\)





Definition of Module Defined by Ring Homomorphism














\(\ds \)

\(=\)







\(\ds \map f a\)





Definition of Unity of Ring



$\blacksquare$





