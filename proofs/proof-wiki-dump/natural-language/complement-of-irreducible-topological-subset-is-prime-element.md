# 

Source: https://proofwiki.org/wiki/Complement_of_Irreducible_Topological_Subset_is_Prime_Element

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $X$ be an irreducible subset of $S$ such that:

$\relcomp S X \in \tau$
Let $L = \struct {\tau, \preceq}$ be an inclusion ordered set of topology $\tau$.

Then $\relcomp S X$ is prime element in $L$.


Proof

This article needs to be tidied.In particular: This proof lends itself to be rendered neatly by means of the {{eqn}} templatePlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Let $Y, Z \in \tau$ such that

$Y \wedge Z \preceq \relcomp S X$
By definition of topological space:

$Y \cap Z \in \tau$
By Meet in Inclusion Ordered Set:

$Y \cap Z = Y \wedge Z$
By definition of inclusion ordered set:

$Y \cap Z \subseteq \relcomp S X$
By Relative Complement inverts Subsets and Relative Complement of Relative Complement:

$X \subseteq \relcomp S {Y \cap Z}$
By De Morgan's Laws: Relative Complement of Intersection:

$X \subseteq \relcomp S Y \cup \relcomp S Z$
By Intersection with Subset is Subset:

$X = \paren {\relcomp S Y \cup \relcomp S Z} \cap X$
By Intersection Distributes over Union:

$X = \paren {\relcomp S Y \cap X} \cup \paren {\relcomp S Z \cap X}$
By definition of closed set and Relative Complement of Relative Complement:

$X$, $\relcomp S Y$, and $\relcomp S Z$ are closed sets.
By Intersection of Closed Sets is Closed in Topological Space:

$\relcomp S Y \cap X$, $\relcomp S Z \cap X$ are closed sets.
By definition of irreducible:

$\relcomp S Y \cap X = X$ or $\relcomp S Z \cap X = X$
By Intersection with Subset is Subset:

$X \subseteq \relcomp S Y$ or $X \subseteq \relcomp S Z$
By Relative Complement inverts Subsets and Relative Complement of Relative Complement:

$Y \subseteq \relcomp S X$ or $Z \subseteq \relcomp S X$
Thus by definition of inclusion ordered set:

$Y \preceq \relcomp S X$ or $Z \preceq \relcomp S X$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL14:17




