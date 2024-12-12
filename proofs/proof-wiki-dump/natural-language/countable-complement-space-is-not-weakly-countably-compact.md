# 

Source: https://proofwiki.org/wiki/Countable_Complement_Space_is_not_Weakly_Countably_Compact

Theorem
Let $T = \struct {S, \tau}$ be a countable complement topology on an uncountable set $S$.

Then $T$ is not weakly countably compact.


Proof
By definition, $T$ is weakly countably compact if and only if every infinite subset of $S$ has a limit point in $S$.
Let $H \subseteq S$ be a countable set.
From Limit Points of Countable Complement Space, it contains all its limit points.

Let $x \in H$.
$\relcomp S {\relcomp S H \cup \set x} = H \setminus \set x$ is countable.
Then $\relcomp S H \cup \set x$ is an open neighborhood of $x$. 
However $H \cap \paren {\paren {\relcomp S H \cup \set x} \setminus \set x} = H \cap \relcomp S H = \O$.
So $x$ is not a limit point of $H$.

Since $x$ is arbitrary, there are no limit points in $H$. 
This shows that $T$ is not weakly countably compact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $20$. Countable Complement Topology: $7$




