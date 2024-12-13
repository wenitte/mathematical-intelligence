# 

Source: https://proofwiki.org/wiki/Points_are_Path-Connected_iff_Contained_in_Path-Connected_Set



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $x, y \in S$

Then:

$x, y$ are path-connected points in $T$ if and only if there exists a path-connected set of $T$ containing $x$ and $y$.


Proof
Necessary Condition
Let $x, y$ be path-connected points in $T$.
Let $\gamma: \closedint 0 1 \to T$ be a path from $x$ to $y$.
From Image of Path is Path-Connected Set, $\Img \gamma$ is a path-connected set of $T$ containing $x$ and $y$.
The result follows.
$\Box$


Sufficient Condition
Let $B$ be a path-connected set of $T$ containing $x$ and $y$.
Then there exists a path $\gamma: \closedint 0 1 \to B$ from $x$ to $y$.
Let $i_B: B \to S$ be the inclusion mapping from $B$ into $S$.
From Composite of Continuous Mappings is Continuous, $i_B \circ g: \closedint 0 1 \to T$ is continuous.
Hence $i_B \circ g$ is a path from $x$ to $y$ in $T$.
$\blacksquare$





