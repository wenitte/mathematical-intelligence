# 

Source: https://proofwiki.org/wiki/Occurrence_of_Event/Examples/Electric_Circuit_1

Examples of Occurrences of Events
Consider the electric circuit:


Let event $A$ be that switch $A$ is open.
Let event $B_n$ for $n = 1, 2, 3$ be that switch $B_n$ is open.
Let $C$ be the event that no current flows from $M$ to $N$.
Then:

$C = A \cup \paren {B_1 \cap B_2 \cap B_3}$
$\overline C = \overline A \cap \paren {\overline {B_1} \cup \overline {B_2} \cup \overline {B_3} }$


Proof
The circuit is open between $M$ and $N$ if and only if:

switch $A$ is open
or:

all of $B_1$, $B_2$ and $B_3$ are open.
The corresponding events are:

$A$
and

$B_1 \cap B_2 \cap B_3$
from which $C = A \cup \paren {B_1 \cap B_2 \cap B_3}$ follows.

Then:














\(\ds \overline C\)

\(=\)







\(\ds \overline {A \cup \paren {B_1 \cap B_2 \cap B_3} }\)




















\(\ds \)

\(=\)







\(\ds \overline A \cap \overline {\paren {B_1 \cap B_2 \cap B_3} }\)





De Morgan's Laws: Complement of Union














\(\ds \)

\(=\)







\(\ds \overline A \cap \paren {\overline {B_1} \cup \overline {B_2} \cup \overline {B_3} }\)





De Morgan's Laws: Complement of Intersection



$\blacksquare$


Sources
1968: A.A. Sveshnikov: Problems in Probability Theory, Mathematical Statistics and Theory of Random Functions (translated by Richard A. Silverman) ... (previous) ... (next): $\text I$: Random Events: $1$. Relations among Random Events: Example $1.4$




