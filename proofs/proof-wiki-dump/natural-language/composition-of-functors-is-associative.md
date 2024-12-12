# 

Source: https://proofwiki.org/wiki/Composition_of_Functors_is_Associative

Theorem
Let $\mathbf A$, $\mathbf B$, $\mathbf C$ and $\mathbf D$ be metacategories.
Let $F: \mathbf A \to \mathbf B$, $G: \mathbf B \to \mathbf C$ and $H: \mathbf C \to \mathbf D$ be functors.

Then composition of functors is associative:

$H \paren {G F} = \paren {H G} F$


Proof
Let $A$ be an object of $\mathbf A$.
Then, solely by the definition of composite functor:














\(\ds H \paren {G F} A\)

\(=\)







\(\ds H \paren {G F A}\)




















\(\ds \)

\(=\)







\(\ds H \paren {G \paren {F A} }\)




















\(\ds \)

\(=\)







\(\ds H G \paren {F A}\)




















\(\ds \)

\(=\)







\(\ds \paren {H G} F A\)










Then, mutatis mutandis, the same proof works for a morphism $f$ of $\mathbf A$ as well.
Hence the result.
$\blacksquare$





