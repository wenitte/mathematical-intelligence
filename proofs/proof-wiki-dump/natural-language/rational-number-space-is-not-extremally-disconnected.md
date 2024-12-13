# 

Source: https://proofwiki.org/wiki/Rational_Number_Space_is_not_Extremally_Disconnected

Theorem
Let $\struct {\Q, \tau_d}$ be the rational number space under the Euclidean topology $\tau_d$.

Then $\struct {\Q, \tau_d}$ does not form an extremally disconnected space.


Proof
The definition of extremally disconnected space can be stated as:

A $T_2$ (Hausdorff) topological space $T = \struct {S, \tau}$ is extremally disconnected if and only if the closure of every open set of $T$ is open.
Hence the existence will be demonstrated of an open set in $\struct {\Q, \tau_d}$ whose closure is not open.

First we establish that $\struct {\Q, \tau_d}$ is indeed a Hausdorff space.
Indeed, we have:

Rational Numbers form Metric Space
Metric Space is Hausdorff

We have that $\openint 0 1$ is open in $\struct {\R, \tau_d}$.
Thus $\openint 0 1 \cap \Q$ is open in $\struct {\Q, \tau_d}$.
We show that $0$ and $1$ are limit points of $\openint 0 1 \cap \Q$.

For any $\epsilon \in \R_{>0}$:

$\openint {-\epsilon} \epsilon \cap \Q \cap \openint 0 1 = \openint 0 \epsilon \cap \Q$
From Between two Real Numbers exists Rational Number:

$\openint 0 \epsilon \cap \Q \ne \O$
Similarly:

$\openint {1 - \epsilon} 1 \cap \Q \ne \O$
Thus $0$ and $1$ are limit points of $\openint 0 1 \cap \Q$.
Hence:

$0, 1 \in \paren {\openint 0 1 \cap \Q}'$
Thus:

$\closedint 0 1 \cap \Q \subseteq \paren {\openint 0 1 \cap \Q}^-$
where $\paren {\openint 0 1 \cap \Q}^-$ denotes the closure of $\openint 0 1 \cap \Q$.

Now we show that for any $x \notin \closedint 0 1$, $x$ is not a limit point of $\openint 0 1 \cap \Q$.
Suppose $x < 0$.
Then $\dfrac x 2 < 0$.
Thus:

$\openint {x + \dfrac x 2} {x - \dfrac x 2} \cap \Q \cap \openint 0 1 = \O$
Similarly for $y > 1$:

$\openint {y - \dfrac {y - 1} 2} {y + \dfrac {y - 1} 2} \cap \Q \cap \openint 0 1 = \O$

Thus:

$\map \complement {\closedint 0 1 \cap \Q} \subseteq \map \complement {\paren {\openint 0 1 \cap \Q}^-}$
Hence we have:

$\closedint 0 1 \cap \Q = \paren {\openint 0 1 \cap \Q}^-$

From Between two Real Numbers exists Rational Number:

$\openint {-\epsilon} \epsilon \cap \Q \cap \map \complement {\closedint 0 1} = \openint {-\epsilon} 0 \cap \Q \ne \O$
A neighborhood of $0$ must intersect $\map \complement {\closedint 0 1}$.
So $\closedint 0 1 \cap \Q$ is not open in $\struct {\Q, \tau_d}$.

Hence $\openint 0 1$ is that open set in $\struct {\Q, \tau}$ whose closure is not open of which we were to demonstrate the existence.
Thus the result follows from definition of extremally disconnected space.
$\blacksquare$





