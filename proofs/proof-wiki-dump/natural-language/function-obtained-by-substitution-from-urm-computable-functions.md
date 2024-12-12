# 

Source: https://proofwiki.org/wiki/Function_Obtained_by_Substitution_from_URM_Computable_Functions



Theorem
Let the functions $f: \N^t \to \N, g_1: \N^k \to \N, g_2: \N^k \to \N, \ldots, g_t: \N^k \to \N$ all be URM computable functions.
Let $h: \N^k \to \N$ be defined from $f, g_1, g_2, \ldots, g_t$ by substitution.

Then $h$ is also URM computable.


Proof
From the definition:

$\map h {n_1, n_2, \ldots, n_k} = \map f {\map {g_1} {n_1, n_2, \ldots, n_k}, \map {g_2} {n_1, n_2, \ldots, n_k}, \ldots, \map {g_t} {n_1, n_2, \ldots, n_k} }$

Let $P, Q_1, Q_2, \ldots, Q_t$ be normalized URM programs which compute $f, g_1, g_2, \ldots, g_t$ respectively.
Let $\map u = \max \set {\map \rho P, \map \rho {Q_1}, \map \rho {Q_2}, \ldots, \map \rho {Q_t} }$.
Let $s_j = \map \lambda {Q_j}$ be the number of basic instructions in $Q_j$ for $1 \le j \le t$.

Hence:

registers $R_{u + 1}, R_{u + 2}, \ldots, R_{u + k}$ can be used to hold a copy of the input $\tuple {n_1, n_2, \ldots, n_k}$ so it can be guaranteed not to be accidentally overwritten by any operations performed by any of $P, Q_1, Q_2, \ldots, Q_t$
registers $R_{u + k + 1}, R_{u + k + 2}, \ldots, R_{u + k + t}$ can be used to hold copies of the outputs of each of $Q_1, Q_2, \ldots, Q_t$ so they also can be guaranteed not to be accidentally overwritten by any operations performed by any of $P, Q_1, Q_2, \ldots, Q_t$.

The following algorithm can be followed to create a URM program $H$ to compute $h$.
It is assumed that:

the input is in $R_1, R_2, \ldots, R_k$
each of $P, Q_1, Q_2, \ldots, Q_t$ are written so as to start at line $1$.





Step


Process

Notes


$1$


Append a Block Copy Program $\map C {1, u + 1, k}$ to $H$[1].

This stores the input somewhere safe so it can be accessed again later.


$2$


Set $i = 1$.

This counts how many times we iterate through the following loop.


$3$


Calculate $l = \map \lambda H$.

This is the length of $H$ so far.


$4$


Append a Block Copy Program $\map C {u + 1, 1, k}$ to $H$.

This restores the input that we saved in step $1$ so it will be ready for program $Q_i$[2].


$5$


Increment the Jumps in $Q_i$ by $l$ lines[3]. Call this amended version $Q_i'$.

As $Q_i$ was written so as to start from line 1, we need to move all the Jumps so as to point to the same lines relative to the start of $Q_i'$.


$6$


Append $Q_i'$ to $H$.

So $\map \lambda H$ increases by $s_i$.


$7$


Append the command $\map C {1, u + k + i}$ to $H$.

This stores the output of $Q_i'$ in a safe place where it won't get overwritten by something else.


$8$


Add $1$ to $i$.




$9$


Is $i \le t$? If so, go to step $3$. Otherwise, continue to the next step.




$10$


Append the Block Copy Program $\map C {u + k + 1, 1, t}$ to $H$.

This copies the outputs of $Q_1, Q_2, \ldots, Q_t$ back into $R_1, R_2, \ldots, R_t$ ready to be the input to program $P$.


$11$


Calculate $l = \map \lambda H$.

This is the length of $H$ so far.


$12$


Increment the Jumps in $P$ by $l$ lines. Call this amended version $P'$.




$13$


Append $P'$ to $H$.

At this point, $\ds \map \lambda H = k + \sum_{j \mathop = 1}^t \paren {k + s_j + 1} + t + \map \lambda P$.


It can easily be determined that $H$ computes $h$.
Hence $h$ is URM computable.
$\blacksquare$


Commentary
We start with normalized URM programs so as to save having to worry about tidying up the registers and exit jumps. Otherwise there are unnecessary complications.
The object of this exercise is to construct a program which computes, in turn, $g_1$ to $g_t$. Then, from the outputs of these programs, we use the outputs of these as the input of the program which computes $f$.
So the program we are building will consist of each of programs $Q_1, Q_2, \ldots, Q_t$ run one after another, progressively building up a block of registers containing their outputs.
Once all those programs have been run, the outputs then become the input to the program $P$ which computes $f$.
All we have to worry about are:

We need to keep a copy of the input somewhere safe so that it can be loaded back into the input registers before the start of each $Q_j$;
After we've run $Q_j$, we need to store the output somewhere safe;
We need to increment the Jumps so they are consistent relative to the start of each of $P, Q_1, Q_2, \ldots, Q_t$.

Some approaches to the construction of $H$ attempt to compute, at each stage, exactly which lines each of the subprograms will occupy, and pre-calculate in each case what the individual Jump destinations before starting.
However, that approach can obscure the simplicity of what the algorithm defined above is designed to do.

Footnotes

↑ $H$, at this point, is a null URM program. After this step $\map \lambda H = k$.

↑ The first time through $H$, this step is technically unneeded, as $R_1, R_2, \ldots, R_k$ already contains the input. However, performing this step in all cases keeps the algorithm simpler and more modular. It's a programmer thing.

↑ To increment the Jumps by $r$ for any normalized URM program is done by changing all Jumps of the form $\map J {m, n, q}$ to $\map J {m, n, q + r}$.






