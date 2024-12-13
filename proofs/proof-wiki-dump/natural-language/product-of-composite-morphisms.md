# 

Source: https://proofwiki.org/wiki/Product_of_Composite_Morphisms

Theorem
Let $\mathbf C$ be a metacategory.
Let $f \times f': A \times A' \to B \times B'$ and $g \times g': B \times B' \to C \times C'$ be two composable products of morphisms in $\mathbf C$.

Then:

$\paren {g \circ f} \times \paren {g' \circ f'} = \paren {g \times g'} \circ \paren {f \times f'}$
where $\times$ signifies product of morphisms.


Proof
The situation is efficiently captured in the following commutative diagram:
$\quad\quad \begin{xy}
<-5em,0em>*+{A}            = "A",
<0em,0em>*+{A \times A'}   = "P",
<5em,0em>*+{A'}            = "A2",
<-5em,-5em>*+{B}           = "B",
<0em,-5em>*+{B \times B'}  = "Q",
<5em,-5em>*+{B'}           = "B2",
<-5em,-10em>*+{C}          = "C",
<0em,-10em>*+{C \times C'} = "R",
<5em,-10em>*+{C'}          = "C2",
"P";"A"  **@{-} ?>*@{>} ?*!/^.8em/{\pr_1},
"P";"A2" **@{-} ?>*@{>} ?*!/_.8em/{\pr_2},
"Q";"B"  **@{-} ?>*@{>} ?*!/^.8em/{\pr_1},
"Q";"B2" **@{-} ?>*@{>} ?*!/_.8em/{\pr_2},
"R";"C"  **@{-} ?>*@{>} ?*!/_.8em/{\pr_1},
"R";"C2" **@{-} ?>*@{>} ?*!/^.8em/{\pr_2},
"A";"B"   **@{-} ?>*@{>}  ?*!/^.8em/{f},
"A2";"B2" **@{-} ?>*@{>}  ?*!/_.8em/{f'},
"P";"Q"   **@{--} ?>*@{>} ?*!/_1.4em/{f \times f'},
"B";"C"   **@{-} ?>*@{>}  ?*!/^.8em/{g},
"B2";"C2" **@{-} ?>*@{>}  ?*!/_.8em/{g'},
"Q";"R"   **@{--} ?>*@{>} ?*!/_1.4em/{g \times g'},
\end{xy}$
The result is immediate from deleting the $B$s:
$\quad\quad \begin{xy}
<-5em,0em>*+{A}            = "A",
<0em,0em>*+{A \times A'}   = "P",
<5em,0em>*+{A'}            = "A2",
<-5em,-10em>*+{C}          = "C",
<0em,-10em>*+{C \times C'} = "R",
<5em,-10em>*+{C'}          = "C2",
"P";"A"  **@{-} ?>*@{>} ?*!/^.8em/{\pr_1},
"P";"A2" **@{-} ?>*@{>} ?*!/_.8em/{\pr_2},
"R";"C"  **@{-} ?>*@{>} ?*!/_.8em/{\pr_1},
"R";"C2" **@{-} ?>*@{>} ?*!/^.8em/{\pr_2},
"A";"C"   **@{-} ?>*@{>}  ?*!/^1.1em/{g \circ f},
"A2";"C2" **@{-} ?>*@{>}  ?*!/_1.3em/{g' \circ f'},
"P";"R"   **@{--} ?>*@{>} ?*!/_2em/{\paren {g \circ f} \times \\ \paren {g' \circ f'} },
\end{xy}$
The uniqueness of $\paren {g \circ f} \times \paren {g' \circ f'}$ implies it equals $\paren {g \times g'} \circ \paren {f \times f'}$.
$\blacksquare$





