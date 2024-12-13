# 

Source: https://proofwiki.org/wiki/Pullback_of_Commutative_Triangle

Theorem
Let $\mathbf C$ be a metacategory.
Suppose that the following is a commutative diagram in $\mathbf C$:

$\begin{xy}\xymatrix@+1em@L+2px{
 A'
  \ar[rr]^*{h_\alpha}
  \ar[dd]_*{\alpha'}
& &
 A
  \ar[rd]^*{\gamma}
  \ar[dd]^(.4)*{\alpha}

\\ &
 B'
  \ar[ld]^*{\beta'}
  \ar[rr] |{\hole} ^(.3)*{h_\beta}
& &
 B
  \ar[ld]^*{\beta}

\\
 C'
  \ar[rr]_*{h}
& &
 C
}\end{xy}$
and that the two squares in it are pullback diagrams.

Then there is a unique morphism $\gamma': A' \to B'$ making the following commute:

$\begin{xy}\xymatrix@+1em@L+2px{
 A'
  \ar[rr]^*{h_\alpha}
  \ar[dd]_*{\alpha'}
  \ar@{-->}[rd]^*{\gamma'}
& &
 A
  \ar[rd]^*{\gamma}
  \ar[dd]^(.4)*{\alpha}

\\ &
 B'
  \ar[ld]^*{\beta'}
  \ar[rr] |{\hole} ^(.3)*{h_\beta}
& &
 B
  \ar[ld]^*{\beta}

\\
 C'
  \ar[rr]_*{h}
& &
 C
}\end{xy}$
Furthermore, $\gamma'$ makes the following a pullback:

$\begin{xy}\xymatrix@+.5em@L+2px{
 A'
  \ar[r]^*{h_\alpha}
  \ar[d]_*{\gamma'}
&
 A
  \ar[d]^*{\gamma}

\\
 B'
  \ar[r]_*{h_\beta}
&
 B
}\end{xy}$


Proof
The first diagram above can be distorted into:

$\begin{xy}\xymatrix@+.5em@L+2px{
 A'
  \ar@/^/[rrd]^*{\gamma \circ h_\alpha}
  \ar@/_/[ddr]_*{\alpha'}

\\ &
 B'
  \ar[r]^*{h_\beta}
  \ar[d]^*{\beta'}
&
 B
  \ar[d]^*{\beta}

\\ &
 C'
  \ar[r]_*{h}
&
 C
}\end{xy}$
and since the square is a pullback, there is a unique $\gamma': A' \to B'$ as desired.

That:

$\begin{xy}\xymatrix@+.5em@L+2px{
 A'
  \ar[r]^*{h_\alpha}
  \ar[d]_*{\gamma'}
&
 A
  \ar[d]^*{\gamma}

\\
 B'
  \ar[r]_*{h_\beta}
&
 B
}\end{xy}$
is a pullback follows immediately from the Pullback Lemma.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 5.3$: Corollary $5.9$




