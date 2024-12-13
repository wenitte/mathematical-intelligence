# 

Source: https://proofwiki.org/wiki/Real_Number_Line_with_Off-Center_Distance_Function_is_Quasimetric_Space



Theorem
Let $\struct {\R, \tau_d}$ be the real number line with the usual (Euclidean) topology.

Then $\tau_d$ can be given by a quasimetric defined as:

$\map d {x, y} = \begin {cases}
y - x & : y \ge x \\
2 \paren {x - y} & : y < x \end {cases}$

Thus $\struct {\R, \tau_d}$ is a quasimetric space.


Proof
To show that $\map d {x, y}$ is a quasimetric, we need to show that $d: \R \times \R \to \R$ satisfies the following conditions for all $x, y, z \in \R$:

$(\text M 1): \quad \map d {x, x} = 0$
$(\text M 2): \quad \map d {x, y} + \map d {y, z} \ge \map d {x, z}$
$(\text M 4): \quad x \ne y \implies \map d {x, y} > 0$


Proof of $\text M 1$
$\map d {x, x} = x - x = 0$
So $(\text M 1)$ is shown to hold.
$\Box$


Proof of $\text M 2$
Suppose $x \le y \le z$.
Then:














\(\ds \map d {x, y} + \map d {y, z}\)

\(=\)







\(\ds \paren {y - x} + \paren {z - y}\)




















\(\ds \)

\(=\)







\(\ds \paren {z - x}\)




















\(\ds \)

\(=\)







\(\ds \map d {x, z}\)









Suppose $x > y > z$.
Then:














\(\ds \map d {x, y} + \map d {y, z}\)

\(=\)







\(\ds 2 \times \paren {x - y} + 2 \times \paren {y - z}\)




















\(\ds \)

\(=\)







\(\ds 2 \times \paren {x - z}\)




















\(\ds \)

\(=\)







\(\ds \map d {x, z}\)









Equality holds, hence so does the inequality.



This needs considerable tedious hard slog to complete it.In particular: Other cases still to do.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof of $\text M 4$
Suppose $x \ne y$.
There are two possibilities:

$(1): \quad y \ge x$, in which case:
$\map d {x, y} = y - x > 0$
$(2): \quad y < x$, in which case:
$\map d {x, y} = 2 \paren {x - y} > 0$
So $(\text M 4)$ is shown to hold.
$\Box$

All criteria $(\text M 1)$, $(\text M 2)$ and $(\text M 4)$ are shown to hold, and so $\struct {\R, \tau_d}$ is shown to be a  quasimetric space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $28$. Euclidean Topology: $7$




