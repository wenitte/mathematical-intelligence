# 

Source: https://proofwiki.org/wiki/Duality_Principle_(Boolean_Algebras)

This proof is about duality principle in the context of boolean algebra. For other uses, see duality principle.

Theorem
Let $\struct {S, \vee, \wedge, \neg}$ be a Boolean algebra.

Then any theorem in $\struct {S, \vee, \wedge, \neg}$ remains valid if both $\vee$ and $\wedge$ are interchanged, and also $\bot$ and $\top$ are interchanged throughout the whole theorem.


Proof
Let us take the axioms of a Boolean algebra $\struct {S, \wedge, \vee, \neg}$:




\((\text {BA}_1 0)\)  

$:$  













$S$ is closed under $\vee$, $\wedge$ and $\neg$   

  


\((\text {BA}_1 1)\)  

$:$  













Both $\vee$ and $\wedge$ are commutative   

  


\((\text {BA}_1 2)\)  

$:$  













Both $\vee$ and $\wedge$ distribute over the other   

  


\((\text {BA}_1 3)\)  

$:$  













Both $\vee$ and $\wedge$ have identities $\bot$ and $\top$ respectively   

  


\((\text {BA}_1 4)\)  

$:$  













$\forall a \in S: a \vee \neg a = \top, a \wedge \neg a = \bot$   

  


It can be seen by inspection that exchanging $\wedge$ and $\vee$, and $\bot$ and $\top$ throughout, does not change the axioms.
Thus, what you get is a Boolean algebra again.
Hence the result.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 1.5$: Theorem $1.14$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Boolean algebra
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): duality: 2.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Boolean algebra
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): duality: 2.




