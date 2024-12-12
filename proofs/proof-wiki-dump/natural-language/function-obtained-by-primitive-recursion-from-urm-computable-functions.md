# 

Source: https://proofwiki.org/wiki/Function_Obtained_by_Primitive_Recursion_from_URM_Computable_Functions



Theorem
Let the functions $f: \N^k \to \N$ and $g: \N^{k + 2} \to \N$ be URM computable functions.
Let $h: \N^{k + 1} \to \N$ be obtained from $f$ and $g$ by primitive recursion.

Then $h$ is also URM computable.


Proof
From the definition:

$\forall n \in \N: \map h {n_1, n_2, \ldots, n_k, n} = \begin {cases}
\map f {n_1, n_2, \ldots, n_k} & : n = 0 \\
\map g {n_1, n_2, \ldots, n_k, n - 1, \map h {n_1, n_2, \ldots, n_k, n - 1} } & : n > 0 
\end {cases}$

Let $P$ and $Q$ be normalized URM programs which compute $f$ and $g$ respectively.
Let $s = \map \lambda P$ and $t = \map \lambda Q$ be the number of basic instructions in $P$ and $Q$.

Let $u = \max \set {\map \rho P, \map \rho Q, k + 2}$.


This article, or a section of it, needs explaining.In particular: What's $\rho$? Should it be $\lambda$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus registers $R_{u + 1}, R_{u + 2}, \ldots$ are neither used by $P$ nor $Q$ nor for input.
So they can be used for storing values.

The following algorithm can be followed to create a URM program $H$ to compute $h$.
We assume that the input is $\tuple {n_1, n_2, \ldots, n_k, n}$, which is held in $R_1, R_2, \ldots, R_k, R_{k + 1}$.
The plan is that the program will compute $\map h {n_1, n_2, \ldots, n_k, i}$ for $i = 0, 1, 2, \ldots, n$ in order.
At the end of the last iteration, $\map h {n_1, n_2, \ldots, n_k, n}$ will be left in $R_1$.
We are to use the following registers:

$R_{u + 1}, R_{u + 2}, \ldots, R_{u + k + 1}$ will be used to store the input $\tuple {n_1, n_2, \ldots, n_k, n}$ so it does not get overwritten.
We note that $R_{u + k + 1}$ will hold the value of $n$.
$R_{u + k + 2}$ will hold the current value of the recursion variable $i$.
When $r_{u + k + 2} = r_{u + k + 1}$, the computation will have ended.





Step


Process

Notes

$\map \lambda H$


$1$


Append a Block Copy Program $\map C {1, u + 1, k + 1}$ to $H$[1].

This stores the input somewhere safe so it can be accessed again later.

$k + 1$


$2$


Append $\map Z {k + 1}$ to $H$.

This clears $R_{k + 1}$ so that $R_1, R_2, \ldots, R_{k + 1}$ holds the input for calculating $f$.

$k + 2$


$3$


Increment the Jumps in $P$ by $k + 2$ lines[2]. Call this amended version $P'$.

As $P$ was written so as to start from line 1, we need to move all the Jumps so as to point to the same lines relative to the start of $P'$.


$4$


Append $P'$ to $H$.

This will compute $\map h {n_1, n_2, \ldots, n_k, n} = \map f {n_1, n_2, \ldots, n_k}$.

$k + s + 2$


$5$


Append the command $\map J {u + k + 1, u + k + 2, k + s + t + 8}$ to $H$.

If the iterator equals the value of $n$ that was input, this Jumps $H$ to a non-existent line to force $H$ to terminate.

$k + s + 3$


$6$


Append the command $\map C {1, k + 2}$ to $H$.

This copies the output of $P'$ into the last input location for function $g$, that is, the output from $\map h {n_1, n_2, \ldots, n_k, i - 1}$.

$k + s + 4$


$7$


Append the command $\map C {u + k + 2, k + 1}$ to $H$.

This moves the current contents of $R_{u + k + 2}$, the current iteration count, into the last but one input location for function $g$, that is, $i - 1$ itself.

$k + s + 5$


$8$


Append a Block Copy Program $\map C {u + 1, 1, k}$ to $H$.

This restores the input that we saved in step $1$ so it will be ready for program $Q$.

$2 k + s + 5$


$9$


Append the command $\map S {u + k + 2}$ to $H$.

This increments the iterator $i$.

$2 k + s + 6$


$10$


Calculate $l = \map \lambda H$.

This is the length of $H$ so far.


$11$


Increment the Jumps in $Q$ by $k + l$ lines. Call this amended version $Q'$.

As $Q$ was written so as to start from line 1, we need to move all the Jumps so as to point to the same lines relative to the start of $Q'$.


$12$


Append $Q'$ to $H$.

This will compute $\map h {n_1, n_2, \ldots, n_k, n} = \map f {n_1, n_2, \ldots, n_k}$.

$2 k + s + t + 6$


$13$


Append the command $\map J {1, 1, k + s + 3}$ to $H$.

This makes the program jump back to the command added at step $6$.

$2 k + s + t + 7$


The program $H$ finally looks like this:




Line


Command


Comment


$1$


$\map C {1, u + 1}$


Start of block copy of input to store.





$\vdots$





$k + 1$


$\map C {k + 1, u + k + 1}$


End of block copy of input to store.


$k + 2$


$\map Z {k + 1}$


Clear the iterator to zero.


$k + 3$





Start of $P'$.





$P'$





$k + s + 2$





End of $P'$.


$k + s + 3$


$\map J {u + k + 1, u + k + 2, k + s + t + 8}$


If all the iterations have finished, jump to the exit line.


$k + s + 4$


$\map C {1, k + 2}$


Copy the output of $P'$ into input of $Q'$.


$k + s + 5$


$\map C {u + k + 2, k + 1}$


Copy the current iteration count input location for function $Q'$.


$k + s +6$


$\map C {u + 1, 1}$


Start of block copy of stored input back to input of $Q'$.





$\vdots$





$2 k + s + 5$


$\map C {u + k, k}$


End of block copy of stored input back to input of $Q'$.


$2 k + s + 6$


$\map S {u + k + 2}$


Increment the iterator.


$2 k + s + 7$





Start of $Q'$.





$Q'$





$2 k + s + t + 6$





End of $Q'$.


$2 k + s + t + 7$


$\map J {1, 1, k + s + 3}$


Jump back to start the next iteration through $Q'$.


$2 k + s + t + 8$


Empty


Exit line.


It can easily be determined that $H$ computes $h$.
Hence $h$ is URM computable.
$\blacksquare$


Comment
Note that there are two things going on here. The first table is an algorithm for creating the program, the second table is the program itself.


Footnotes

↑ $H$, at this point, is a null URM program.

↑ To increment the Jumps by $r$ for any normalized URM program is done by changing all Jumps of the form $\map J {m, n, q}$ to $\map J {m, n, q + r}$.






