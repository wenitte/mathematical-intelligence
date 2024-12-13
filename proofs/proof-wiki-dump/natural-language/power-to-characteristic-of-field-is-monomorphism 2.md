# 

Source: https://proofwiki.org/wiki/Power_to_Characteristic_of_Field_is_Monomorphism



Theorem
Let $F$ be a field whose zero is $0_F$ and whose unity is $1_F$.
Let the characteristic of $F$ be $p$ where $p \ne 0$.
Let $\phi: F \to F$ be the mapping on $F$ defined as:

$\forall x \in F: \map \phi x = x^p$

Then $\phi$ is a (field) monomorphism.


Proof
Let $a, b \in F$.
First note that:










\(\ds \forall k: 0 < k < p: \, \)



\(\ds \binom p k\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)



Binomial Coefficient of Prime








\(\ds \leadsto \ \ \)





\(\ds \binom p k\)

\(=\)







\(\ds r p\)





for some $r \in \Z$








\(\ds \leadsto \ \ \)





\(\ds \binom p k a^k b^{p - k}\)

\(=\)







\(\ds r p \cdot a^k b^{p - k}\)














\(\ds \leadsto \ \ \)





\(\ds \binom p k a^k b^{p - k}\)

\(=\)







\(\ds 0_F\)





Characteristic of Field by Annihilator: Prime Characteristic








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^{p - 1} \binom p k a^k b^{p - k}\)

\(=\)







\(\ds 0_F\)









So:














\(\ds \map \phi {a + b}\)

\(=\)







\(\ds \paren {a + b}^p\)




















\(\ds \)

\(=\)







\(\ds a^p + \sum_{k \mathop = 1}^{p - 1} \binom p k a^k b^{p - k} + b^p\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds a^p + 0_F + b^p\)




















\(\ds \)

\(=\)







\(\ds a^p + b^p\)




















\(\ds \)

\(=\)







\(\ds \map \phi a + \map \phi b\)










Multiplication is more straightforward:














\(\ds \map \phi {a b}\)

\(=\)







\(\ds \paren {a b}^p\)




















\(\ds \)

\(=\)







\(\ds a^p b^p\)





Power of Product of Commutative Elements in Monoid














\(\ds \)

\(=\)







\(\ds \map \phi a \map \phi b\)










Thus, $\phi$ is a (field) homomorphism. 

It is clear that $\phi$ is not a zero homomorphism, since:














\(\ds \map \phi {1_F}\)

\(=\)







\(\ds 1_F^p\)




















\(\ds \)

\(=\)







\(\ds 1_F\)





Power of Identity is Identity














\(\ds \)

\(\ne\)







\(\ds 0_F\)









Hence, from Ring Homomorphism from Field is Monomorphism or Zero Homomorphism, it follows that $\phi$ must be a monomorphism.
$\blacksquare$


Also see
Prime Power of Sum Modulo Prime, where the same technique is used.


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 3$. Homomorphisms: Theorem $3.3$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $3$: Field Theory: Definition and Examples of Field Structure: $\S 89 \gamma$




