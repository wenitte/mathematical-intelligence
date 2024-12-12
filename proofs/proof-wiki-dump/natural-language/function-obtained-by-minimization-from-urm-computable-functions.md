# 

Source: https://proofwiki.org/wiki/Function_Obtained_by_Minimization_from_URM_Computable_Functions

Theorem
Let the function $f: \N^{k+1} \to \N$ be a URM computable function.
Let $g: \N^k \to \N$ be the function obtained by minimization from $f$ thus:

$\map g {n_1, n_2, \ldots, n_k} \approx \map {\mu y} {\map f {n_1, n_2, \ldots, n_k, y} = 0}$

Then $g$ is also URM computable.


Proof
Let $f: \N^{k+1} \to \N$ be a URM computable function.
Let $P$ be a URM program which computes $f$.
Let $u = \map \rho P$ be the number of registers used by $P$.
Let $s = \map \lambda P$ be the length of $P$.
We can use:

the registers $R_{u+1}, R_{u+2}, \ldots, R_{u+k}$ to store the input $\tuple {n_1, n_2, \ldots, n_k}$;
the register $R_{u+k+1}$ to store the current value of the recursion variable $y$.
We check whether or not $\map f {n_1, n_2, \ldots, n_k, y} = 0$ by comparing the output from running $P$ (appearing in register $1$ at the end of the running of $P$) with the number in register $R_{u+k+2}$, which remains at $0$ throughout.

The following algorithm can be followed to create a URM program $H$ to compute $h$.
We assume that the input is $\tuple {n_1, n_2, \ldots, n_k}$, which is held in $R_1, R_2, \ldots, R_k$.

We are to use the following registers:

$R_{u+1}, R_{u+2}, \ldots, R_{u+k}$ will be used to store the input $\tuple {n_1, n_2, \ldots, n_k}$ so it does not get overwritten.
$R_{u+k+1}$ will hold the value of $y$.
$R_{u+k+2}$ will hold the value $0$ throughout.
When $r_{u+k+2} = r_1$, the computation will have ended.
We also define $v = \map \lambda H$ to be the number of basic instructions in $H$.





Step


Process

Notes

$\lambda \left({H}\right)$


$1$


Append a Block Copy Program $\map C {1, u + 1, k}$ to $H$[1].

This stores the input somewhere safe so it can be accessed again later.

$k$


$2$


Increment the Jumps in $P$ by $k$ lines[2]. Call this amended version $P'$.

As $P$ was written so as to start from line 1, we need to move all the Jumps so as to point to the same lines relative to the start of $P'$.


$3$


Append $P'$ to $H$.

This will compute $\map f {n_1, n_2, \ldots, n_k, y}$.

$k + s$


$4$


Append the command $\map J {1, u + k + 2, u + k + s + 4}$ to $H$.

This Jumps $H$ to the rest of the program if the output of $P$ is zero.

$k + s + 1$


$5$


Append the command $\map S {u + k + 1}$ to $H$.

Increment $y$.

$k + s + 2$


$6$


Append a Block Copy Program $\map C {u+1, 1, k+1}$ to $H$.

Recall the input values, and put $y$ in $R_{k+1}$.

$2 k + s + 3$


$7$


Append a Clear Registers Program $\map Z {k + 2, u}$ to $H$.

Clear the remaining registers of $P'$, as they may contain values after it halted.

$u + k + s + 2$


$8$


Append the command $\map J {1, 1, k + 1}$ to $H$.

This makes the program unconditionally jump back to the start of $P'$ (as $r_1 = r_1$ is always true).

$u + k + s + 3$


$9$


Append the command $\map C {u+k+1, 1}$ to $H$.

Put $y$ into the output register.

$v = u + k + s + 4$


It can easily be determined that $H$ computes $g$.
Hence $g$ is URM computable.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Footnotes

↑ $H$, at this point, is a null URM program.

↑ To increment the Jumps by $r$ for any normalized URM program is done by changing all Jumps of the form $\map J {m, n, q}$ to $\map J {m, n, q+r}$.






