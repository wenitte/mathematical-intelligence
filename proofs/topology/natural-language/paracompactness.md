This is a proof that is making connections between paracompactness, the shrinking lemma, partition of unity, and metric paracompactness.

In simple terms, it is saying that:

Paracompactness is a property that a space called 'X' -- which has been proven to be a Hausdorff space (a space where for any two different points, there exist neighbourhoods of these points which are disjoint) -- must have. That property is defined by the existence of a 'locally finite refinement' from any open cover of the space. 'Locally finite' means that each point of the space is contained in an open set intersecting only finitely many other open sets from the cover. That refinement is another open cover where for every point in the space, there's only a finite number of sets containing that point. 

We then have the 'shrinking lemma', a tool that states if we start with an open cover (each element is an open set and the union of all of them contains the whole space) of our Hausdorff space, then there is a new open cover where each element is a 'subset' of an element in the old cover and the closure (adding limit points to the set) of each element in the new cover is contained within an element in the old open cover. 

Next, given an open cover, a partition of unity associated with the cover is a collection of continuous functions from the space to [0, 1] such that for each point in the space, there exists an open set containing that point where only finitely many of these functions are nonzero, each function is supported within a set of the open cover (the closure of its nonzero points is contained within the set), and at each point, the sum of these functions' values is 1.

Finally, this leads to the conclusion that if you have a paracompact metric space (space where distance between points is defined), then it will also be paracompact, assuring us that the paracompact property is preserved in metric spaces.
