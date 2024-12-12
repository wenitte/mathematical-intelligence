# 

Source: https://proofwiki.org/wiki/Composition_of_One-Variable_URM_Computable_Functions


This page has been identified as a candidate for refactoring of medium complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $f: \N \to \N$ and $g: \N \to \N$ be URM computable functions of one variable.
Let $f \circ g$ be the composition of $f$ and $g$.

Then $f \circ g: \N \to \N$ is a URM computable function.


Proof
Let $f: \N \to \N$ and $g: \N \to \N$ be URM computable functions of one variable.
Let $P$ be a URM program which computes $f$.
Let $Q$ be a URM program which computes $g$.

Let $s = \map \lambda Q$ be the number of basic instructions in $Q$.
Let $u = \map \rho Q$ be the number of registers used by $Q$.

In order to compute $f \circ g$ the program must compute $g$ first (by running $Q$), then use the output of $Q$ as the input of $P$, which must then compute $f$.

After $Q$ has computed the value of $\map g n$, its output is to be found in $R_1$.
Its instruction pointer is greater than $s$, and may at this point be indeterminate.
Also, the contents of $R_2, R_3, \ldots, R_u$ are also indeterminate.

So we need to do the following things:

The instruction pointer needs to be set to the line immediately after the end of $Q$, that is, to line $s+1$.
The registers used by $Q$, except $R_1$, the one holding the output of $Q$, must be set to $0$. So a Clear Registers Program $\map Z {2, u}$ must be appended to the end of $Q$.
The program $P$ must be appended to the end of $Q$ with $\map Z {2, u}$ appended. However, $P$ no longer starts at line $1$ but at line $\tuple {q + u - 1}$, so any Jump instructions of the form $\map J {m, n, q}$ in $P$ must have $q$ changed to $\tuple {q + u - 1}$.
When that has been achieved, the following happens:

The program runs $Q$, amended if necessary so that the instruction pointer ends up at $s+1$.
The contents of $R_2$ to $R_u$ are then set to zero.
$P$ is now run, with the output of $Q$ in its input $R_1$, and all the other registers set to zero.
The output of $P$ can now be found in $R_1$.

The resulting program $Q$ followed by $\map Z {2, u}$ followed by $P$ is called:

the concatenation of $Q$ and $P$, or, in general:
a concatenated program,
and is denoted $Q * P$.
Note that this is read:

Run $Q$ first;
Then run $P$.
So it is read from left to right.
In that sense the notation is different from that of $f \circ g$ for the composition of $f$ and $g$, which is read from right to left.

So $f \circ g$ is computed by $Q * P$.
$\blacksquare$

Its length $\map \lambda {Q * P}$ is given as:

$\map \lambda {Q * P} = \map \lambda Q + \paren {u - 1} \map \lambda P$
The $u - 1$ comes from the length of the Clear Registers Program.

Thus we have an algorithm for concatenating two URM programs, as follows:


Alternative Proof
It can be noted that this is an instance of a Function Obtained by Substitution from URM Computable Functions‎ where $t = k = 1$.
$\blacksquare$


Concatenation of two URM Programs
Let $P$ and $Q$ be one-variable URM programs.
Let $s = \map \lambda Q$ be the number of basic instructions in $Q$.
Let $u = \map \rho Q$ be the number of registers used by $Q$.

Then the concatenation of $Q$ and $P$ is written $Q * P$, and is the program obtained as follows:

Replace every Jump instruction of $P$ of the form $\map J {m, n, q}$ by $\map J {m, n, q + s + u - 1}$.
Replace every Jump instruction of $Q$ of the form $\map J {m, n, q}$, where $q > s$, by $\map J {m, n, s + 1}$.
If $u > 1$, then add the instructions for the Clear Registers Program $\map Z {2, u}$ to the end of $Q$ from line $s + 1$ onwards.
Add the amended (as above) instructions for $P$ to the end of the above, renumbering each line $l$ to be $l + s + u - 1$.

The resulting program $Q * P$ is technically $Q * \map Z {2, u} * P$.





