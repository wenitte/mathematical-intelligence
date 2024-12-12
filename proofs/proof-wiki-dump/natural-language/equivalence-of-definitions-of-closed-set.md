# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Closed_Set



Theorem
The following definitions of the concept of Closed Set in the context of topology are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$.

Definition 1
$H$ is closed (in $T$) if and only if its complement $S \setminus H$ is open in $T$. 
That is, $H$ is closed if and only if $\paren {S \setminus H} \in \tau$.
That is, if and only if $S \setminus H$ is an element of the topology of $T$.

Definition 2
$H$ is closed (in $T$) if and only if every limit point of $H$ is also a point of $H$.
That is, by the definition of the derived set:

$H$ is closed (in $T$) if and only if $H' \subseteq H$
where $H'$ denotes the derived set of $H$.


Proof
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$.


Definition 1 implies Definition 2
Let $H$ be a closed set of $T$ by definition 1.
Let $H^\complement$ denote the relative complement of $H$ in $S$.
By definition of closed set in $T$:

$H^\complement$ is open in $T$
From Set is Open iff Neighborhood of all its Points:

$\forall x \in S: x \notin H \implies H^\complement$ is a neighborhood of $x$.
By definition of limit point:

$\forall x \in S: x \notin H \implies x$ is not a limit point of $H$
Thus $H$ is a closed set of $T$ by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $H$ be a closed set of $T$ by definition 2.
Then by definition:
$\forall x \in S: x \notin H \implies x$ is not a limit point of $H$
By definition of limit point:
$\forall x \in S: x \notin H \implies H^\complement$ is a neighborhood of $x$
By Set is Open iff Neighborhood of all its Points:
$H^\complement$ is open in $T$
Thus $H$ is a closed set of $T$ by definition 1.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Limit Points

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Which instance of De Morgan's Laws (Set Theory)/Relative Complement/Family of Sets? Check in 2nd Edition and extrapolate back.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous) ... (next): $2.23$




