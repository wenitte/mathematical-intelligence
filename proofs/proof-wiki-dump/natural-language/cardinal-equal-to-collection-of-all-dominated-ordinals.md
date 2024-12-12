# 

Source: https://proofwiki.org/wiki/Cardinal_Equal_to_Collection_of_All_Dominated_Ordinals


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: The use of the classes of ordinals and cardinals is needlessly obfuscating. We can avoid these constructs altogether and just talk about ordinals and cardinalsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $S$ be a set.
Let $\preccurlyeq$ denote the dominance relation.
Let $\On$ denote the class of all ordinals.
Let $x = \set {y \in \On: y \preccurlyeq S}$

Then:

$(1): \quad x$ is an element of the class of all cardinals.
$(2): \quad$ There is no injection $f$ such that $f : x \to S$


Proof
$x$ is an ordinal
$x$ is clearly a subset of the class of all ordinals.
Moreover, suppose $y \in x$ and $z \in y$.

Then $z \subseteq y$ by the fact that $y$ is an ordinal.
$y \in x$ means that $f : y \to S$ for some injective mapping $f$ by the definition of dominance.

But then, $f \restriction_z : z \to S$ is also an injection by Restriction of Injection is Injection.
Thus, $z \in x$ by the definition of $x$, so $x$ is transitive.

Therefore, $x$ is an ordinal, since it is a transitive subset of the ordinal class.
$\Box$


$x$ is a cardinal
Aiming for a contradiction, suppose $x$ is not a cardinal.
It follows that $\size x \in x$ and $x \sim \set x$ by corollary to Cardinal of Cardinal Equal to Cardinal and Ordinal Number Equivalent to Cardinal Number.

Let $g: x \to \size x$ be a bijection.
Let $f: \size x \to S$ be an injection.
Then $f \circ g : x \to S$ is an injection by Composite of Injections is Injection.

It follows that $x \preccurlyeq S$, so $x \in x$.
This means that $x \subsetneq x$ by Transitive Set is Proper Subset of Ordinal iff Element of Ordinal, which is a contradiction.
Therefore, $x$ must be an element of the class of all cardinals.
$\Box$


No injection $f: x \to S$
Aiming for a contradiction, suppose that there is an injection $f: x \to S$.
By the definition of $x$, it follows that $x \in x$.

This means that $x \subsetneq x$ by Transitive Set is Proper Subset of Ordinal iff Element of Ordinal, which is a contradiction.
Therefore, no injection can exist.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.40$




