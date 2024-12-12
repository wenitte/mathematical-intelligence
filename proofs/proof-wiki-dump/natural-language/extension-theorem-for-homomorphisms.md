# 

Source: https://proofwiki.org/wiki/Extension_Theorem_for_Homomorphisms



Theorem
Let $\struct {S, \circ}$ be a commutative semigroup with cancellable elements
Let $\struct {C, \circ} \subseteq \struct {S, \circ}$ be the subsemigroup of all cancellable elements of $S$
Let $\struct {S', \circ'}$ be an inverse completion of $\struct {S, \circ}$
Let $\phi$ be a (semigroup) homomorphism from $\struct {S, \circ}$ into a semigroup $\struct {T, *}$ such that $\map \phi y$ is invertible for all $y \in C$.

Then:

$(1): \quad$ There is one and only one homomorphism $\psi$ from $\struct {S', \circ'}$ into $\struct {T, *}$ extending $\phi$
$(2): \quad \forall x \in S, y \in C: \map \psi {x \circ' y^{-1} } = \map \phi * \paren {\map \phi y}^{-1}$
$(3): \quad$ If $\phi$ is a monomorphism, then so is $\psi$.


Proof
It is proved that $\struct {C, \circ}$ is a subsemigroup of $\struct {S, \circ}$ by Cancellable Elements of Semigroup form Subsemigroup.


Proof of at most one such homomorphism
To show there is at most one such homomorphism:
Let $\psi$ be a homomorphism from $\struct {S', \circ'}$ into $\struct {T, *}$ extending $\phi$.
It will be shown that for each element in the domain of $\psi$ , its image is uniquely determined by $\phi$.
It will therefore follow that $\psi$ is the only such extension of $\phi$.

Now $\map \phi y$ is invertible and hence cancellable for $*$ by Invertible Element of Monoid is Cancellable.
As $\psi$ is an extension of $\phi$, it follows that $\map \psi y$ is also cancellable for $*$.
Consider:

$\map \psi {x \circ' y^{-1} } * \map \psi y$
for arbitrary $x \in S, y \in C$.
We have:














\(\ds \map \psi {x \circ' y^{-1} } * \map \psi y\)

\(=\)







\(\ds \map \psi {x \circ' y^{-1} \circ' y}\)





Definition of Morphism Property














\(\ds \)

\(=\)







\(\ds \map \psi x\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds \map \phi x\)





$\psi$ extends $\phi$














\(\ds \)

\(=\)







\(\ds \map \phi x * \paren {\map \phi y}^{-1} * \map \phi y\)





by hypothesis: $\map \phi y$ is invertible in $\struct {T, *}$














\(\ds \)

\(=\)







\(\ds \map \phi x * \paren {\map \phi y}^{-1} * \map \psi y\)





$\psi$ extends $\phi$




So as $\map \psi y$ is cancellable for $*$:

$(1): \quad \map \psi {x \circ' y^{-1} } = \map \phi x * \paren {\map \phi y}^{-1}$

From Inverse Completion is Commutative Semigroup:

$S' = S \circ' C^{-1}$
thus $(1)$ holds for all $x \in S, y \in C$.
So, there is at most one homomorphism extending $\phi$.
$\blacksquare$


Proof of at least one such homomorphism
By Restriction of Mapping to Image is Surjection, $\phi: S \to \phi \sqbrk S$ is a surjection.
Therefore, by definition, $\phi$ is an epimorphism.
We have that $\struct {S, \circ}$ is a commutative semigroup.
By Epimorphism Preserves Semigroups and Epimorphism Preserves Commutativity, $\phi \sqbrk {\struct {S, \circ} }$ is also a commutative semigroup.
As $S \subseteq T$ it follows that $\phi \sqbrk {\struct {S, \circ} }$ is a subsemigroup of $\struct {T, *}$.
By Commutation with Inverse in Monoid, every element of $\phi \sqbrk S$ commutes with every element of $\paren {\phi \sqbrk C}^{-1}$.

Thus it follows that the mapping $\psi: S' \to T$ defined by:

$\forall x \in S, y \in C: \map \psi {x \circ' y^{-1} } = \map \phi x * \paren {\map \phi y}^{-1}$
is a well-defined homomorphism extending $\phi$.
$\blacksquare$


Proof of Monomorphism
Let $\phi$ be a monomorphism.
Then:

$\forall x, y \in S: \map \phi x = \map \phi y \implies x = y$

Now let $x \circ y^{-1}, z \circ w^{-1} \in S'$ such that $\map \psi {x \circ y^{-1} } = \map \psi {z \circ w^{-1} }$.

Then:














\(\ds \map \psi {x \circ' y^{-1} }\)

\(=\)







\(\ds \map \psi {z \circ' w^{-1} }\)





Definition of Morphism Property








\(\ds \leadsto \ \ \)





\(\ds \map \psi x * \map \psi {y^{-1} }\)

\(=\)







\(\ds \map \psi z * \map \psi {w^{-1} }\)














\(\ds \leadsto \ \ \)





\(\ds \map \psi x * \map \psi w\)

\(=\)







\(\ds \map \psi z * \map \psi y\)














\(\ds \leadsto \ \ \)





\(\ds \map \phi x * \map \phi w\)

\(=\)







\(\ds \map \phi z * \map \phi y\)





$\psi$ is an extension of $\phi$








\(\ds \leadsto \ \ \)





\(\ds \map \phi {x \circ w}\)

\(=\)







\(\ds \map \phi {z \circ y}\)





Definition of Morphism Property








\(\ds \leadsto \ \ \)





\(\ds x \circ w\)

\(=\)







\(\ds z \circ y\)





$\phi$ is a monomorphism








\(\ds \leadsto \ \ \)





\(\ds x \circ' y^{-1}\)

\(=\)







\(\ds z \circ' w^{-1}\)









Thus $\psi$ is a monomorphism if $\phi$ is.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers: Theorem $20.4$




