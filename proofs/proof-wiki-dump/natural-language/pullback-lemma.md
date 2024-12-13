# 

Source: https://proofwiki.org/wiki/Pullback_Lemma



Theorem
Let $\mathbf C$ be a metacategory.
Suppose the following is a commutative diagram in $\mathbf C$:

$\begin{xy}\xymatrix@+0.5em{
 F
  \ar[d]_*+{h''}
  \ar[r]^*+{f'}
&
 E
  \ar[d]^*+{h'}
  \ar[r]^*+{g'}
&
 D
  \ar[d]^*+{h}

\\
 A
  \ar[r]_*+{f}
&
 B
  \ar[r]_*+{g}
&
 C
}\end{xy}$
Suppose furthermore that the right square is a pullback.

Then the left square is a pullback if and only if the outer rectangle is.


Proof
Necessary Condition
Suppose the left square is a pullback.
To verify the outer rectangle is a pullback, suppose we are given the following commutative diagram:

$\begin{xy}\xymatrix@+0.5em{
P
\ar@/^1em/[rrrd]^*+{p_1}
\ar@/_1em/[ddr]_*+{p_2}
\\ & & &
D
\ar[d]^*+{h}
\\ &
A
\ar[r]_*+{f}
&
B
\ar[r]_*+{g}
&
C
}\end{xy}$
The right square being a pullback implies there is a unique $v: P \to E$ , making the following commute:

$\begin{xy}\xymatrix@+0.5em{
P
\ar@/^1em/[rrrd]^*+{p_1}
\ar@/_1em/[ddr]_*+{p_2}
\ar@{-->}@/^/[rrd]_*+{v}
\\ & &
E
\ar[d]^*+{h'}
\ar[r]^*+{g'}
&
D
\ar[d]^*+{h}
\\ &
A
\ar[r]_*+{f}
&
B
\ar[r]_*+{g}
&
C
}\end{xy}$
Since the left square is also a pullback, we subsequently find a unique $u: P \to F$ , making the following commute:

$\begin{xy}\xymatrix@+0.5em{
 P
  \ar@/^1em/[rrrd]^*+{p_1}
  \ar@/_1em/[ddr]_*+{p_2}
  \ar@/^/[rrd]_*+{v}
  \ar@{-->}[rd]_*+{u}

\\ &
 F
  \ar[d]_*+{h''}
  \ar[r]^*+{f'}
&
 E
  \ar[d]^*+{h'}
  \ar[r]^*+{g'}
&
 D
  \ar[d]^*+{h}

\\ &
 A
  \ar[r]_*+{f}
&
 B
  \ar[r]_*+{g}
&
 C
}\end{xy}$
In conclusion, the outer rectangle is a pullback.
$\Box$


Sufficient Condition
Suppose the outer rectangle is a pullback.
To verify the left square is a pullback, suppose we are given the following commutative diagram:

$\begin{xy}\xymatrix@+0.5em{
 P
  \ar@/^/[rrd]^*+{p_1}
  \ar@/_1em/[ddr]_*+{p_2}

\\ & &
 E
  \ar[d]^*+{h'}

\\ &
 A
  \ar[r]_*+{f}
&
 B
}\end{xy}$
Evidently, we can amend this diagram as follows:

$\begin{xy}\xymatrix@+0.5em{
 P
  \ar@/^/[rrd]_*{p_1}
  \ar@/^1em/[rrrd]^*+{g' \circ p_1}
  \ar@/_1em/[ddr]_*+{p_2}

\\ & &
 E
  \ar[d]^*+{h'}
  \ar[r]^*+{g'}
&
 D
  \ar[d]^*+{h}

\\ &
 A
  \ar[r]_*+{f}
&
 B
  \ar[r]_*+{g}
&
 C
}\end{xy}$
Because the outer rectangle is a pullback, we thus obtain a unique $u: P \to F$, making the following commute:

$\begin{xy}\xymatrix@+0.5em{
 P
  \ar@/^1em/[rrrd]^*+{g' \circ p_1}
  \ar@/_1em/[ddr]_*+{p_2}
  \ar@{-->}[rd]_*+{u}

\\ &
 F
  \ar[d]_*+{h''}
  \ar[r]^*+{f'}
&
 E
  \ar[d]^*+{h'}
  \ar[r]^*+{g'}
&
 D
  \ar[d]^*+{h}

\\ &
 A
  \ar[r]_*+{f}
&
 B
  \ar[r]_*+{g}
&
 C
}\end{xy}$
If we now can prove that $f' \circ u = p_1$, then we're done.
To this end, remark that they both complete the following commutative diagram:

$\begin{xy}\xymatrix@+0.5em{
 P
  \ar@{-->}[rrd]
  \ar@/^1em/[rrrd]^*+{g' \circ p_1}
  \ar@/_1em/[ddr]_*+{p_2}

\\ & &
 E
  \ar[d]^*+{h'}
  \ar[r]^*+{g'}
&
 D
  \ar[d]^*+{h}

\\ &
 A
  \ar[r]_*+{f}
&
 B
  \ar[r]_*+{g}
&
 C
}\end{xy}$
Since the right square is a pullback, there is only one such morphism.
Therefore, we conclude $f' \circ u = p_1$.

Hence the left square is also a pullback.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 5.3$: Lemma $5.8$




