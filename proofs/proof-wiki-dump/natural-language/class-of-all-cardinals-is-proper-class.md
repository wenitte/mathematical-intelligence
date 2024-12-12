# 

Source: https://proofwiki.org/wiki/Class_of_All_Cardinals_is_Proper_Class

Theorem
The class $\NN$ of all cardinal numbers is a proper class.


Proof
Aiming for a contradiction, suppose $\NN$ is a small class.
By Class of All Cardinals is Subclass of Class of All Ordinals:

$\NN \subseteq \On$
Therefore, $\bigcup \NN$ is an ordinal by Union of Set of Ordinals is Ordinal.


There is believed to be a mistake here, possibly a typo.In particular: The above theorem has been handled only for a set of ordinals, not a classYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

Take $x = \set {y \in \On: y \preccurlyeq \bigcup \NN}$.
By Cardinal Equal to Collection of All Dominated Ordinals, $x$ is a cardinal number and there is no injection $f: x \to \bigcup \NN$.

But since $x$ is a cardinal number, $x \in \NN$, so $x \subseteq \bigcup \NN$ by Set is Subset of Union.
Therefore, the identity mapping $I_x: x \to \bigcup \NN$ is an injection.

This is a contradiction.
Therefore by Proof by Contradiction $\NN$ is not a small class.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.41$




