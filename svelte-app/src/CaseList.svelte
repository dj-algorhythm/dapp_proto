<script>
    import { casefilestore } from './casefilestore'    
</script>

<div id="caseList" class="container">
    {#each $casefilestore as casefile}
        <div class="container">
            <p class="text-end">Case File#:000{ casefile.caseId }</p>
            <p class="text-end">Created by { casefile.caseCreator } on:TODO</p>
            <h3>Case Subject</h3>
            <div class="row">
                <div class="col">
                    <h4>Summary</h4>
                    <div class="container border">
                        <p>Description - Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        <div class="row">
                            <p class="col">Assigned Officer:</p>
                            <div class="col">
                                <p>Name</p>
                                <p>[ -- eth address -- ]</p>
                            </div>
                        </div>
                        <div class="row">
                            <p class="col">Phase:</p>
                            <p class="col">{ casefile.phase }</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h4>Actions</h4>
                    <p class="text-center"><button class="btn btn">Assign case</button></p>
                    <p class="text-center"><button class="btn btn">Update</button></p>
                </div>
            </div>
        </div>
    {/each}
</div>